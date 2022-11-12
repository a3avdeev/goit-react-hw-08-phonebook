import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.Styled'

export const Loader = () => {
    return <LoaderStyled>
        <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#808080'
    />
    </LoaderStyled>  
};