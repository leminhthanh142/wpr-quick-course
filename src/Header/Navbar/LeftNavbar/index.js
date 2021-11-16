import React from 'react';
import styled from "styled-components";

export const LeftNavbar = () => {
    return (
        <>
            {LeftNavbarData.map((item, index) => (
                <LeftNavbarItems className={item.className} key={index}>
                    <ItemLink
                        key={index}
                        href={item.url}
                        title={item.title}
                    >
                        {item.text}
                    </ItemLink>
                    {item.className && <QRContainer className="qr-code-container">
                        <QRimg src="./qr_code.png" />
                        <QRapps>
                            {AppImages.map((item, index) => (
                                <QrAppLink key={index} href={item.url}>
                                    <QrAppImg src={item.src} />
                                </QrAppLink>
                            ))}
                        </QRapps>
                    </QRContainer>}
                </LeftNavbarItems>
            ))}
        </>
    );
}

const LeftNavbarData = [
    {
        url: 'https://banhang.shopee.vn',
        text: 'Kênh Người Bán'
    },
    {
        url: 'https://shopee.vn/m/sell-on-shopee',
        title: 'Trở thành Người bán Shopee',
        text: 'Trở thành Người bán Shopee'
    },
    {
        className: 'qr',
        text: 'Tải ứng dụng'
    },
    {
        text: 'Kết nối'
    },
]

const AppImages = [
    {
        url: 'https://shopee.vn/web',
        src: './app-store.png'
    },
    {
        url: 'https://shopee.vn/web',
        src: './google-play.png'
    },
    {
        url: 'https://shopee.vn/web',
        src: './app-gallery.png'
    }
]

const QRContainer = styled.div`
    width: 186px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 118%;
    padding: 4px;
    margin: 8px 0;
    border-radius: 2px;
    display: none;
    cursor: pointer;
    z-index: 999;
    
    &::before {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        top: -10px;
        height: 18px;
        cursor: pointer;
    }  
`

const QRimg = styled.img`
    width: 100%;
`

const QrAppLink = styled.a`
    margin: 0 11px;
`

const QrAppImg = styled.img`
    height: 16px;
`

const LeftNavbarItems = styled.li`
    position: relative;
    display: inline-block;
    margin: 0 8px;

    &.qr:hover .qr-code-container {
        display: block;
    }
`

const QRapps = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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