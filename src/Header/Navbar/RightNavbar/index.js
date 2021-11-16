import styled from "styled-components";

export const RightNavbar = () => {
    return (
        <>
            {RightNavbarData.map((item, index) => (
                <RightNavbarItems key={index}>
                    <ItemLink
                        key={index}
                        href={item.url}
                    >
                        {item.text}
                    </ItemLink>
                </RightNavbarItems>
            ))}
        </>
    );
}

const RightNavbarData = [
    {
        text: 'Thông Báo'
    },
    {
        url: 'https://help.shopee.vn',
        text: 'Hỗ Trợ'
    },
    {
        text: 'Đăng Ký'
    },
    {
        text: 'Đăng Nhập'
    }
]

const RightNavbarItems = styled.li`
    position: relative;
    display: inline-block;
    margin: 0 8px;
`

const ItemLink = styled.a`
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`