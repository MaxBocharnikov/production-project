import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router-dom';

import i18n from '../../config/i18ForTests';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: Partial<StateSchema>
}


export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {route, initialState} = options;
    return render(
       <StoreProvider initialState={initialState}>
           <MemoryRouter initialEntries={[route]}>
               <I18nextProvider i18n={i18n}>
                   {component}
               </I18nextProvider>
           </MemoryRouter>
       </StoreProvider>
    )
}