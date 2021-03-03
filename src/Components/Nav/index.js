import React from 'react';

import { Container } from './styles';

function Nav({ toggleTheme, theme }) {
  const urlMoon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VGREE0NTsiIGQ9Ik00OTIuNTMzLDM5My41MTRjLTQ1LjU5MSw3MS4xMTctMTI1LjI2LDExOC4yODgtMjE1Ljk1OSwxMTguNDg0DQoJQzEzNi4wNjEsNTEyLjMwMywyMC42ODYsMzk4LjY0NCwxOC45ODcsMjU4LjE0MUMxNy4zODksMTI1LjkzOCwxMTUuNjEsMTYuMzQxLDI0My4wMTQsMC4wMjdjMi43MjMtMC4zNDksNC40OTcsMi43NjYsMi44NDIsNC45NTYNCgljLTMwLjcxOSw0MC42NjEtNDguOTMxLDkxLjI4Ni00OC45MzEsMTQ2LjE3N2MwLDEzNC4wNjMsMTA4LjY3NiwyNDIuNzM4LDI0Mi43MzgsMjQyLjczOGMxNy4wMDQsMCwzMy41OTItMS43NDQsNDkuNjA3LTUuMDc1DQoJQzQ5MS45NTksMzg4LjI2NCw0OTQuMDE1LDM5MS4yMDIsNDkyLjUzMywzOTMuNTE0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VEQzE0ODsiIGQ9Ik00ODkuMjc2LDM4OC44MTljMi42ODQtMC41NTgsNC43NCwyLjM3MywzLjI2MSw0LjY4MkM0NDYuODUxLDQ2NC43NzMsMzY2Ljk0Niw1MTIsMjc2LjAwOSw1MTINCglDMTM0LjA0NCw1MTIsMTguOTcyLDM5Ni45MTcsMTguOTcyLDI1NC45NjNjMC01Ni44MDgsMTguNDI0LTEwOS4zMDYsNDkuNjM1LTE1MS44NmMtNy4wODYsMjMuMjQ1LTEwLjk2MSw0Ny44ODgtMTEuMTE2LDczLjQxOQ0KCUM1Ni42MjQsMzE5LjU1NCwxNzEuNSw0MzUuMTU3LDMxNC41MzUsNDM1LjE1MWM1MS44MzEtMC4wMDIsMTAwLjA3Ni0xNS4zNDIsMTQwLjQzNi00MS43NA0KCUM0NjYuNjU1LDM5Mi42OTIsNDc4LjEwNiwzOTEuMTQzLDQ4OS4yNzYsMzg4LjgxOXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
  const urlSun = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZEMzQ3OyIgY3g9IjI1NS45OTciIGN5PSIyNTUuOTk3IiByPSIxNDQuODI0Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik0yNTYsNTYuODQ5Yy00LjI3MywwLTcuNzM3LTMuNDYzLTcuNzM3LTcuNzM3VjcuNzM3QzI0OC4yNjMsMy40NjMsMjUxLjcyNywwLDI1NiwwDQoJCXM3LjczNywzLjQ2Myw3LjczNyw3LjczN3Y0MS4zNzZDMjYzLjczNyw1My4zODYsMjYwLjI3Myw1Ni44NDksMjU2LDU2Ljg0OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEMzQ3OyIgZD0iTTE1Mi41NjMsODQuNTY4Yy0yLjY3NCwwLTUuMjc0LTEuMzg3LTYuNzA3LTMuODY5bC0yMC42ODctMzUuODMyDQoJCWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OWMzLjcwMS0yLjEzNCw4LjQzMi0wLjg3LDEwLjU2OSwyLjgzMmwyMC42ODcsMzUuODMyYzIuMTM2LDMuNywwLjg2OSw4LjQzMi0yLjgzMiwxMC41NjkNCgkJQzE1NS4yMDYsODQuMjM0LDE1My44NzYsODQuNTY4LDE1Mi41NjMsODQuNTY4eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzNDc7IiBkPSJNNzYuODIzLDE2MC4yOTRjLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhMMzcuMTMsMTM4LjU2OQ0KCQljLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjljMi4xMzYtMy43MDEsNi44NjgtNC45NjcsMTAuNTY5LTIuODMybDM1LjgzMiwyMC42ODdjMy43LDIuMTM2LDQuOTY4LDYuODY4LDIuODMyLDEwLjU2OQ0KCQlDODIuMDk3LDE1OC45MDcsNzkuNDk3LDE2MC4yOTQsNzYuODIzLDE2MC4yOTR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik00OS4xMTIsMjYzLjczN0g3LjczN0MzLjQ2NCwyNjMuNzM3LDAsMjYwLjI3NCwwLDI1NnMzLjQ2NC03LjczNyw3LjczNy03LjczN2g0MS4zNzYNCgkJYzQuMjczLDAsNy43MzcsMy40NjMsNy43MzcsNy43MzdTNTMuMzg1LDI2My43MzcsNDkuMTEyLDI2My43Mzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik00MS4wMDUsMzg3Ljg2OWMtMi42NzQsMC01LjI3NC0xLjM4Ny02LjcwNy0zLjg2OWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OQ0KCQlsMzUuODMyLTIwLjY4N2MzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJjMi4xMzYsMy43LDAuODY5LDguNDMyLTIuODMyLDEwLjU2OWwtMzUuODMyLDIwLjY4Nw0KCQlDNDMuNjQ4LDM4Ny41MzUsNDIuMzE3LDM4Ny44NjksNDEuMDA1LDM4Ny44Njl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik0xMzEuODYyLDQ3OC43NGMtMS4zMTIsMC0yLjY0My0wLjMzNC0zLjg2MS0xLjAzOGMtMy43LTIuMTM2LTQuOTY4LTYuODY4LTIuODMyLTEwLjU2OQ0KCQlsMjAuNjg3LTM1LjgzMmMyLjEzNi0zLjcwMSw2Ljg2OC00Ljk2NywxMC41NjktMi44MzJjMy43LDIuMTM2LDQuOTY4LDYuODY4LDIuODMyLDEwLjU2OWwtMjAuNjg3LDM1LjgzMg0KCQlDMTM3LjEzNiw0NzcuMzUyLDEzNC41MzYsNDc4Ljc0LDEzMS44NjIsNDc4Ljc0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzNDc7IiBkPSJNMjU2LDUxMmMtNC4yNzMsMC03LjczNy0zLjQ2My03LjczNy03LjczN3YtNDEuMzc2YzAtNC4yNzQsMy40NjQtNy43MzcsNy43MzctNy43MzcNCgkJczcuNzM3LDMuNDYzLDcuNzM3LDcuNzM3djQxLjM3NkMyNjMuNzM3LDUwOC41MzcsMjYwLjI3Myw1MTIsMjU2LDUxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEMzQ3OyIgZD0iTTM4MC4xMzgsNDc4Ljc0Yy0yLjY3NCwwLTUuMjc0LTEuMzg3LTYuNzA3LTMuODY5bC0yMC42ODctMzUuODMyDQoJCWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OWMzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJsMjAuNjg3LDM1LjgzMmMyLjEzNiwzLjcsMC44NjksOC40MzItMi44MzIsMTAuNTY5DQoJCUMzODIuNzgxLDQ3OC40MDYsMzgxLjQ1MSw0NzguNzQsMzgwLjEzOCw0NzguNzR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik00NzAuOTk1LDM4Ny44NjljLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhsLTM1LjgzMi0yMC42ODcNCgkJYy0zLjctMi4xMzYtNC45NjgtNi44NjgtMi44MzItMTAuNTY5YzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmwzNS44MzIsMjAuNjg3YzMuNywyLjEzNiw0Ljk2OCw2Ljg2OCwyLjgzMiwxMC41NjkNCgkJQzQ3Ni4yNjksMzg2LjQ4MSw0NzMuNjY5LDM4Ny44NjksNDcwLjk5NSwzODcuODY5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzNDc7IiBkPSJNNTA0LjI2MywyNjMuNzM3aC00MS4zNzZjLTQuMjczLDAtNy43MzctMy40NjMtNy43MzctNy43MzdzMy40NjQtNy43MzcsNy43MzctNy43MzdoNDEuMzc2DQoJCWM0LjI3MywwLDcuNzM3LDMuNDYzLDcuNzM3LDcuNzM3UzUwOC41MzYsMjYzLjczNyw1MDQuMjYzLDI2My43Mzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDM0NzsiIGQ9Ik00MzUuMTc3LDE2MC4yOTRjLTIuNjc0LDAtNS4yNzQtMS4zODctNi43MDctMy44NjljLTIuMTM2LTMuNy0wLjg2OS04LjQzMiwyLjgzMi0xMC41NjkNCgkJbDM1LjgzMi0yMC42ODdjMy43LTIuMTM0LDguNDMyLTAuODcsMTAuNTY5LDIuODMyYzIuMTM2LDMuNywwLjg2OSw4LjQzMi0yLjgzMiwxMC41NjlsLTM1LjgzMiwyMC42ODcNCgkJQzQzNy44MiwxNTkuOTYsNDM2LjQ4OSwxNjAuMjk0LDQzNS4xNzcsMTYwLjI5NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEMzQ3OyIgZD0iTTM1OS40MzcsODQuNTY4Yy0xLjMxMiwwLTIuNjQzLTAuMzM0LTMuODYxLTEuMDM4Yy0zLjctMi4xMzYtNC45NjgtNi44NjgtMi44MzItMTAuNTY5DQoJCWwyMC42ODctMzUuODMyYzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmMzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5bC0yMC42ODcsMzUuODMyDQoJCUMzNjQuNzExLDgzLjE4MSwzNjIuMTEsODQuNTY4LDM1OS40MzcsODQuNTY4eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQkUzMTsiIGQ9Ik0yNTYsMTExLjE4Yy01LjI0MiwwLTEwLjQxOCwwLjI4Ni0xNS41MTYsMC44MjhjNzIuNjg1LDcuNzQzLDEyOS4zMDMsNjkuMjUyLDEyOS4zMDMsMTQzLjk5MQ0KCXMtNTYuNjE5LDEzNi4yNDktMTI5LjMwMywxNDMuOTkyYzUuMDk4LDAuNTQ0LDEwLjI3MywwLjgyOCwxNS41MTYsMC44MjhjNzkuOTgyLDAsMTQ0LjgyLTY0LjgzOCwxNDQuODItMTQ0LjgyDQoJUzMzNS45ODMsMTExLjE4LDI1NiwxMTEuMTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';

  return (
    <>
      <Container>
        <div className="container row nav-row">
          <div className="col-md-6 col-xs-12">
            <h1>AI MOUSE</h1>
          </div>
          <div className="col-md-6 col-xs-12 linha-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Shop</a>

            <button onClick={toggleTheme}>{theme === "light" ? <img src={urlMoon} width="20" alt="Moon Icon" /> : <img src={urlSun} width="20" alt="Sun Icon" />}</button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Nav;