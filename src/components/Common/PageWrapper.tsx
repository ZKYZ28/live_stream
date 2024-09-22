import { FC, ReactElement } from 'react';
import Menu from "../Menu/Menu.tsx";
type PageWrapperProps = {
    children?: ReactElement;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
    return (
        <div className="flex w-full">
            <Menu/>
            {children}
        {/* Footer */}
        </div>
);
};

export default PageWrapper;
