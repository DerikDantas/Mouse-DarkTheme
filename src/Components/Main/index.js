import React from 'react';

import { Container } from './styles';

import Mouse from '../../Images/Product.png';

function Main() {

    const cartURL = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC0zMSA1MTIuMDAwMjYgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2NC45NjA5MzggMzAwLjAwMzkwNmguMDIzNDM3Yy4wMTk1MzEgMCAuMDM5MDYzLS4wMDM5MDYuMDU4NTk0LS4wMDM5MDZoMjcxLjk1NzAzMWM2LjY5NTMxMiAwIDEyLjU4MjAzMS00LjQ0MTQwNiAxNC40MjE4NzUtMTAuODc4OTA2bDYwLTIxMGMxLjI5Mjk2OS00LjUyNzM0NC4zODY3MTktOS4zOTQ1MzItMi40NDUzMTMtMTMuMTUyMzQ0LTIuODM1OTM3LTMuNzU3ODEyLTcuMjY5NTMxLTUuOTY4NzUtMTEuOTc2NTYyLTUuOTY4NzVoLTM2Ni42MzI4MTJsLTEwLjcyMjY1Ny00OC4yNTM5MDZjLTEuNTI3MzQzLTYuODYzMjgyLTcuNjEzMjgxLTExLjc0NjA5NC0xNC42NDQ1MzEtMTEuNzQ2MDk0aC05MGMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWg3Ny45Njg3NWMxLjg5ODQzOCA4LjU1MDc4MSA1MS4zMTI1IDIzMC45MTc5NjkgNTQuMTU2MjUgMjQzLjcxMDkzOC0xNS45NDE0MDYgNi45Mjk2ODctMjcuMTI1IDIyLjgyNDIxOC0yNy4xMjUgNDEuMjg5MDYyIDAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1aDI3MmM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1cy02LjcxNDg0NC0xNS0xNS0xNWgtMjcyYy04LjI2OTUzMSAwLTE1LTYuNzMwNDY5LTE1LTE1IDAtOC4yNTc4MTIgNi43MDcwMzEtMTQuOTc2NTYyIDE0Ljk2MDkzOC0xNC45OTYwOTR6bTMxMi4xNTIzNDMtMjEwLjAwMzkwNi01MS40Mjk2ODcgMTgwaC0yNDguNjUyMzQ0bC00MC0xODB6bTAgMCIvPjxwYXRoIGQ9Im0xNTAgNDA1YzAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1czQ1LTIwLjE4NzUgNDUtNDUtMjAuMTg3NS00NS00NS00NS00NSAyMC4xODc1LTQ1IDQ1em00NS0xNWM4LjI2OTUzMSAwIDE1IDYuNzMwNDY5IDE1IDE1cy02LjczMDQ2OSAxNS0xNSAxNS0xNS02LjczMDQ2OS0xNS0xNSA2LjczMDQ2OS0xNSAxNS0xNXptMCAwIi8+PHBhdGggZD0ibTM2MiA0MDVjMCAyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVzNDUtMjAuMTg3NSA0NS00NS0yMC4xODc1LTQ1LTQ1LTQ1LTQ1IDIwLjE4NzUtNDUgNDV6bTQ1LTE1YzguMjY5NTMxIDAgMTUgNi43MzA0NjkgMTUgMTVzLTYuNzMwNDY5IDE1LTE1IDE1LTE1LTYuNzMwNDY5LTE1LTE1IDYuNzMwNDY5LTE1IDE1LTE1em0wIDAiLz48L3N2Zz4=';

    return (
        <Container>
            <div className="circles">
                <div className="circle-1" />
                <div className="circle-2" />
                <div className="circle-3" />
            </div>

            <div className="barra-1"/>
            <div className="barra-2"/>

            <h1 className="titulo-fundo">AI MOUSE</h1>

            <img src={Mouse} alt="Mouse IMG" />

            <h2>AI Mouse 2nd 2.4G Wireless Mouse</h2>

            <a href="/" className="btn-buy">Comprar<img src={cartURL} alt="CART" width="25" /></a>
        </Container>
    )
}

export default Main;