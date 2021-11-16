import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import { IconSearch } from '../../components/Icons/IconSearch';

export const Search = () => {
    return (
        <HeaderSearch>
            <LogoWrapper>
                <a href="https://shopee.vn/"><Logo /></a>
            </LogoWrapper>
            <SearchBar>
                <Input placeholder="Nhập để tìm kiếm sản phẩm" />
                <IconSearchWrapper>
                    <IconSearch />
                </IconSearchWrapper>
            </SearchBar>
            <Cart>Icon giỏ hàng</Cart>
        </HeaderSearch>
    );
}

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    height: 94px;
`
const LogoWrapper = styled.div`
    width: 200px;
`

const SearchBar = styled.div`
    flex: 1;
    height: 40px;
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    display: flex;
    justify-content: space-around;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 8px;
`

const IconSearchWrapper = styled.div`
    position: absolute;
    right: 4px;
    top: 3px;
    height: 34px;
    width: 60px;
    background-color: #fb5533;
    border-radius: 2px;
    text-align: center;
    line-height: 40px;

    &:hover {
        background-color: #fb6445;
        cursor: pointer;
    }
`

const Cart = styled.div`
    width: 150px;
    text-align: center;
`
