import {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/ui/Portal/Portal';

import style from './Modal.module.scss'
import {useTheme} from 'app/providers/ThemeProvider';

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactNode;
    className?: string;
}

const CLOSING_ANIMATION_DELAY_IN_MS: number = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {isOpen, onClose, children, className} = props;

    const {theme} = useTheme();
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const closingTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback((): void => {
        if(onClose) {
            setIsClosing(true);
           closingTimeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
           }, CLOSING_ANIMATION_DELAY_IN_MS)
        }
    }, [onClose])

    const onClickContent = (e: React.MouseEvent): void => {
        e.stopPropagation();
    }

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
        [style.closing]: isClosing,
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            if(closingTimeoutRef.current) {
                clearTimeout(closingTimeoutRef.current);
            }
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(style.Modal, mods, [className, theme])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div className={style.content} onClick={onClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};