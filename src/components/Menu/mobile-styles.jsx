import styled from 'styled-components';
import { TabletMenuSection } from './tablet-styles';
import { Logo, NavMenu } from './styles'

export const MobileMenuSection = styled(TabletMenuSection)`
    ${Logo}{
        width: 40px;
        height: 40px;
    }
    
    ${NavMenu} {
        display: none;
    }
`;

export default MobileMenuSection;
