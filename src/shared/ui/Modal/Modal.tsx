import {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/ui/Portal/Portal';

import style from './Modal.module.scss'


interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactNode;
    lazy?: boolean;
    className?: string;
}

const CLOSING_ANIMATION_DELAY_IN_MS: number = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {isOpen, onClose, lazy, children, className} = props;

    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
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

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(style.Modal, mods, [className])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div className={style.content} onClick={onClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};