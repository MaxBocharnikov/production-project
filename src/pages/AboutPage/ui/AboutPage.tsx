import React from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('about');
    return (
        <div>
            BRGHRT
            {t('О нас')}
        </div>
    );
};

export default AboutPage;

