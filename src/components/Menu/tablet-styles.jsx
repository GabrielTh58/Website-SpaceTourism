import styled from 'styled-components';
import { MenuSection, NavMenu, Line } from './styles'

export const TabletMenuSection = styled(MenuSection)`
    padding: 0 0 0 40px;
    height: 96px;

    ${NavMenu} {
        width: 70%;

        ul {
            gap: 20px;
            margin-left: 30px;
            justify-content: center;

            li {
                margin-right: 15px;

                a {
                    font-size: 14px;

                    span {
                        display: none;
                    }
                }
            }
        }
    }

    ${Line} {
        width: 0;
    }
`;

export default TabletMenuSection;
