const icons = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">
    <symbol viewBox="0 0 25 25" id="crm" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="ba" d="M0 0h25v25H0z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <path d="M16.827 12.5a4.327 4.327 0 10-8.653 0 4.327 4.327 0 008.653 0" fill="#FF7A59"></path>
            <g>
                <mask id="bb" fill="#fff">
                    <use xlink:href="#ba"></use>
                </mask>
                <path d="M12.5 21.048A8.548 8.548 0 013.952 12.5a8.548 8.548 0 1117.096 0 8.548 8.548 0 01-8.548 8.548M12.5 0C5.597 0 0 5.596 0 12.5 0 19.403 5.597 25 12.5 25S25 19.403 25 12.5C25 5.596 19.403 0 12.5 0"
                      fill="#33475B"></path>
            </g>
        </g>
    </symbol>
    <symbol viewBox="0 0 25 25" id="marketing" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="ca" d="M0 0h24.777v25H0z"></path>
            <path id="cc" d="M.389 0h12.33v16.36H.39z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g>
                <mask id="cb" fill="#fff">
                    <use xlink:href="#ca"></use>
                </mask>
                <path d="M20.393 15.763c-1.32 3.19-4.51 5.413-8.207 5.28-4.246-.153-7.843-3.563-8.202-7.797a8.544 8.544 0 016.363-9.01.882.882 0 00.205-.08l3.939-2.171c.848-.47.602-1.744-.36-1.875a12.169 12.169 0 00-3.1-.021C4.866.835.056 6.177 0 12.387-.061 19.343 5.559 25 12.5 25c6.084 0 11.142-4.348 12.258-10.106.164-.844-.751-1.49-1.493-1.055l-2.46 1.44a.993.993 0 00-.412.484"
                      fill="#33475B"></path>
            </g>
            <g transform="translate(12)">
                <mask id="cd" fill="#fff">
                    <use xlink:href="#cc"></use>
                </mask>
                <path d="M11.963 9.291l-1.7-.508L12.696.636c.127-.424-.309-.786-.69-.574L1.06 6.158c-.382.213-.328.787.085.91l1.701.51-2.436 8.146c-.127.424.31.786.691.573l10.946-6.095c.382-.213.328-.787-.085-.91"
                      fill="#FF7A59"></path>
            </g>
        </g>
    </symbol>
    <symbol viewBox="0 0 25 29" id="sales" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="da" d="M0 .981h25V17.89H0z"></path>
            <path id="dc" d="M.043.487h17.055V17H.043z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(0 -.981)">
                <mask id="db" fill="#fff">
                    <use xlink:href="#da"></use>
                </mask>
                <path d="M4.09 14.976c-.276-1.514-.165-3.161.604-4.89 1.222-2.743 3.802-4.748 6.786-5.093a8.55 8.55 0 019.569 8.489c0 .574-.164 1.433-.301 2.05a.993.993 0 00.493 1.093c.466.249 1.093.619 1.62 1.044.533.43 1.353.203 1.56-.451.44-1.386.647-2.874.56-4.426C24.628 6.38 19.25 1.15 12.83.986 5.776.805-.001 6.469-.001 13.482c0 1.179.169 2.316.478 3.395.222.78 1.206.999 1.736.387.429-.493.94-.995 1.445-1.291.34-.2.502-.608.432-.997"
                      fill="#33475B"></path>
            </g>
            <g transform="translate(4 12.019)">
                <mask id="dd" fill="#fff">
                    <use xlink:href="#dc"></use>
                </mask>
                <path d="M16.282 6.287l-4.652-.876-1.917-4.329a.988.988 0 00-.915-.595.986.986 0 00-.877.521L5.65 5.162l-4.71.485a1 1 0 00-.624 1.681l3.249 3.443-.994 4.628a1.003 1.003 0 00.977 1.213c.14 0 .287-.03.429-.098l4.279-2.027 4.094 2.375a.988.988 0 00.5.138c.568 0 1.077-.495.994-1.13l-.605-4.695 3.524-3.16a1 1 0 00-.482-1.728"
                      fill="#FF7A59"></path>
            </g>
        </g>
    </symbol>
    <symbol viewBox="0 0 31 25" id="service" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="ea" d="M.494.041h23.403V25H.494z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(7 -.04)">
                <mask id="eb" fill="#fff">
                    <use xlink:href="#ea"></use>
                </mask>
                <path d="M12.383.042a.492.492 0 00-.467.713 8.27 8.27 0 01.861 2.956c.02.218.174.39.388.435a8.546 8.546 0 016.68 9.688c-.543 3.59-3.422 6.51-7.005 7.097a8.539 8.539 0 01-8.53-3.665.525.525 0 00-.731-.158c-.597.403-1.403.93-2.555.847-.401-.03-.661.407-.462.756 2.194 3.823 6.341 6.38 11.087 6.287 6.511-.128 11.964-5.453 12.238-11.962C24.17 6.224 19 .559 12.383.042"
                      fill="#33475B"></path>
            </g>
            <path d="M14.836 1.286a4.342 4.342 0 011.38 2.055c.257.813.295 1.633.112 2.456a4.247 4.247 0 01-1.172 2.135L8.96 14.354a1.02 1.02 0 01-.74.322c-.278 0-.524-.108-.738-.322L1.285 7.965A4.472 4.472 0 01.113 5.797a4.682 4.682 0 01.113-2.456 4.33 4.33 0 011.38-2.055A4.074 4.074 0 013.566.354a4.338 4.338 0 012.152.161 4.552 4.552 0 011.862 1.188l.642.643.642-.643A4.562 4.562 0 0110.726.515a4.333 4.333 0 012.15-.16c.729.128 1.382.44 1.96.931"
                  fill="#FF7A59"></path>
        </g>
    </symbol>
    <symbol viewBox="0 0 13 24" id="CaretRight" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.89 11.439c-.035-.09-.102-.167-.157-.25l-.097-.155c-.014-.022-.023-.048-.043-.068L2.588.466A1.502 1.502 0 00.413 2.535L9.434 12l-9.02 9.466a1.5 1.5 0 102.174 2.069l10.005-10.5c.02-.021.029-.046.043-.07.033-.05.064-.102.097-.153.055-.083.122-.16.158-.25.037-.091.044-.187.062-.282.018-.093.047-.185.047-.28 0-.094-.029-.186-.047-.28-.018-.094-.025-.191-.062-.281"
              fill="#7C98B6" fill-rule="evenodd"></path>
    </symbol>
    <symbol viewBox="0 0 585.44 165.95" id="HSLogo_color" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                .cls-1{fill:none}.cls-2{fill:#33475b;clip-path:url(#clip-path)}.cls-3{fill:#ff7a59;clip-path:url(#clip-path-2)}
            </style>
            <clipPath transform="translate(0 0)">
                <rect class="cls-1" width="585.44" height="165.96"></rect>
            </clipPath>
            <clipPath transform="translate(0 0)">
                <rect class="cls-1" x="376.04" width="156.14" height="163.62"></rect>
            </clipPath>
        </defs>
        <title>Logo - Full (Color)</title>
        <g id="Layer_2">
            <g class="cls-2">
                <polygon
                        points="63.4 27.47 63.4 74.28 20.41 74.28 20.41 27.47 0 27.47 0 139.21 20.41 139.21 20.41 93.92 63.4 93.92 63.4 139.21 83.81 139.21 83.81 27.47 63.4 27.47"></polygon>
                <path d="M149.13,103.09a16.88,16.88,0,0,1-33.77,0V55.23H96v47.86a36.21,36.21,0,0,0,72.42,0V55.23H149.13Z"
                      transform="translate(0 0)"></path>
                <path d="M292.57,60.16c0-9.81,6.49-12.92,13.6-12.92,5.73,0,13.3,4.36,18.25,9.65L337.1,41.95c-6.33-8.56-19.17-14.48-29.68-14.48-21,0-36.19,12.3-36.19,32.69,0,37.83,46.24,25.83,46.24,47,0,6.53-6.34,12.3-13.6,12.3-11.45,0-15.16-5.6-20.42-11.52l-14.07,14.63c9,11.05,20.1,16.66,33.4,16.66,19.95,0,36-12.45,36-31.91,0-42-46.24-28.95-46.24-47.16"
                      transform="translate(0 0)"></path>
                <path d="M578.63,121.36c-11.44,0-14.69-4.95-14.69-12.53V75.28h17.78v-17H563.94V35.85l-19.63,8.81V113c0,17.48,12.06,26.29,28.6,26.29a39.62,39.62,0,0,0,7.74-.62l4.79-17.63c-2.16.15-4.64.3-6.81.3"
                      transform="translate(0 0)"></path>
                <path d="M222.82,55.79c-9.59,0-16.28,2.78-22.75,9.13V28.14H180.68V96.31c0,25.52,18.45,43,39.18,43,23,0,43.23-17.79,43.23-41.75,0-23.66-18.62-41.76-40.27-41.76m-.12,64a22,22,0,1,1,22-22,22,22,0,0,1-22,22"
                      transform="translate(0 0)"></path>
                <path d="M433.36,96.54c0-24-20.19-41.75-43.23-41.75-20.73,0-39.18,17.48-39.18,43V166h19.39V129.17c6.46,6.34,13.16,9.13,22.74,9.13,21.65,0,40.27-18.09,40.27-41.76M415,96.3a22,22,0,1,1-22-22,22,22,0,0,1,22,22"
                      transform="translate(0 0)"></path>
            </g>
            <g class="cls-3">
                <path d="M496,53.85V34.37a15,15,0,0,0,8.65-13.52v-.45a15,15,0,0,0-15-15h-.45a15,15,0,0,0-15,15v.45a15,15,0,0,0,8.65,13.52V53.85a42.48,42.48,0,0,0-20.2,8.89L409.23,21.13a16.75,16.75,0,0,0,.6-4.21,16.9,16.9,0,1,0-16.92,16.87,16.72,16.72,0,0,0,8.32-2.26l52.61,40.93a42.61,42.61,0,0,0,.65,48l-16,16a13.74,13.74,0,0,0-4-.65,13.88,13.88,0,1,0,13.89,13.89,13.7,13.7,0,0,0-.65-4l15.83-15.83A42.68,42.68,0,1,0,496,53.85m-6.56,64.06A21.9,21.9,0,1,1,511.36,96a21.9,21.9,0,0,1-21.9,21.9"
                      transform="translate(0 0)"></path>
            </g>
        </g>
    </symbol>
    <symbol viewBox="0 0 27 28" id="Sprocket" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.614 20.177c-2.091 0-3.787-1.678-3.787-3.747 0-2.07 1.696-3.747 3.787-3.747 2.092 0 3.787 1.677 3.787 3.747s-1.695 3.747-3.787 3.747m1.134-10.961V5.882c.88-.411 1.495-1.291 1.495-2.313v-.077c0-1.41-1.166-2.563-2.59-2.563h-.078c-1.424 0-2.59 1.153-2.59 2.563v.077c0 1.022.616 1.902 1.495 2.313v3.334c-1.309.2-2.505.734-3.492 1.52L5.74 3.617c.061-.231.104-.47.105-.721C5.845 1.298 4.539.002 2.925 0 1.312-.002.002 1.29 0 2.888-.002 4.485 1.304 5.78 2.918 5.783c.526 0 1.013-.147 1.44-.388l9.097 7.005a7.22 7.22 0 00-1.227 4.03c0 1.56.498 3.004 1.34 4.19L10.8 23.36a2.389 2.389 0 00-.686-.11c-1.326 0-2.4 1.063-2.4 2.375S8.788 28 10.114 28c1.326 0 2.401-1.064 2.401-2.376a2.32 2.32 0 00-.111-.679l2.736-2.708a7.397 7.397 0 004.473 1.502c4.08 0 7.386-3.272 7.386-7.309 0-3.654-2.713-6.673-6.252-7.214"
              fill="#FF7A59" fill-rule="evenodd"></path>
    </symbol>
    <symbol id="hs-icon-globe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 19"
            enable-background="new 0 0 14.25 19" xml:space="preserve">
            <path id="path-1_1_" fill="currentColor" d="M13.9225,5.2324c0.6133,2.2106,0.3595,4.5326-0.7147,6.5393
            c-1.0749,2.0067-2.8439,3.4614-4.9806,4.0957c-0.5524,0.1641-1.1122,0.2664-1.672,0.3114v1.5345h2.9005
            c0.344,0,0.622,0.2882,0.622,0.6434c0,0.3558-0.278,0.6434-0.622,0.6434H2.4107c-0.344,0-0.622-0.2876-0.622-0.6434
            c0-0.3551,0.278-0.6434,0.622-0.6434h2.9005v-1.546c-1.1818-0.0901-2.3413-0.4285-3.4068-1.0391
            c-0.3011-0.1718-0.4093-0.5636-0.2432-0.8743c0.1667-0.3108,0.5461-0.4233,0.8453-0.2516c1.6496,0.9458,3.5605,1.1671,5.3774,0.6286
            c1.8176-0.5398,3.3222-1.7764,4.2354-3.4826c0.9131-1.7062,1.1296-3.6808,0.6077-5.5607c-0.5219-1.8806-1.718-3.4363-3.367-4.3814
            C9.0596,1.0337,8.9507,0.6425,9.1168,0.3318c0.1667-0.3114,0.5455-0.4227,0.846-0.2516C11.9028,1.192,13.3092,3.0217,13.9225,5.2324
            z M11.875,7.5208c0,3.2738-2.6635,5.9375-5.9372,5.9375S0,10.7947,0,7.5208s2.6642-5.9375,5.9378-5.9375S11.875,4.247,11.875,7.5208
            z"></path></symbol>
    <symbol viewBox="0 0 27 28" id="cms" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="aa" d="M.5.18h14.318V13H.5z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(12 14.458)">
                <mask id="ab" fill="#fff">
                    <use xlink:href="#aa"></use>
                </mask>
                <path d="M7.555 2.645L1.218.19A.613.613 0 00.5.794v9.102c0 .299.216.554.51.604l6.545 2.492a.66.66 0 00.208 0l6.545-2.492a.613.613 0 00.51-.604V.794A.613.613 0 0014.1.19L7.763 2.645a.605.605 0 01-.208 0"
                      fill="#FF7A59"></path>
            </g>
            <path d="M9.318 20.425c-3.462-1.39-5.808-4.973-5.296-9.036.484-3.84 3.635-6.945 7.482-7.38a8.55 8.55 0 019.544 8.491c0 .306-.09.466.127.682.342.34 3.439-1.177 3.439-1.177a.514.514 0 00.329-.517C24.409 4.834 18.68-.352 11.806.02 5.459.362.27 5.624.01 11.976c-.24 5.871 3.576 10.877 8.87 12.477a.496.496 0 00.635-.482c-.006-.965-.013-2.712-.015-3.286a.28.28 0 00-.183-.26"
                  fill="#33475B"></path>
        </g>
    </symbol>
    <symbol  xmlns="http://www.w3.org/2000/svg" id="nav-contact-sales">
        <path d="M323.963 81c2.124 0 3.852 1.778 3.852 3.964 0 1.905-.56 3.606-1.435 4.719-.661.843-1.502 1.35-2.417 1.35-.908 0-1.742-.5-2.4-1.33-.884-1.114-1.452-2.823-1.452-4.739 0-2.186 1.728-3.964 3.852-3.964zm3.487 9.089a8.438 8.438 0 012.898 2.2c.432.508.422 1.26-.012 1.766-1.545 1.805-3.812 2.945-6.33 2.945-2.547 0-4.836-1.165-6.382-3.004-.41-.488-.376-1.22.037-1.705a8.437 8.437 0 012.836-2.174c.895 1.272 2.118 2.06 3.466 2.06 1.358 0 2.59-.799 3.487-2.088z"  transform="translate(-317 -81)"
        fill="currentColor"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16" id="chevron-down">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </symbol>
    
    <symbol id="social__facebook" enable-background="new 0 0 24 24"  viewBox="0 0 24 24">
      <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
    </symbol>
    <symbol id="social__instagram" viewBox="0 0 511 511.9" >
      <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/>
    </symbol>
    <symbol id="social__youtube" viewBox="-21 -117 682.66672 682" >
      <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/>
    </symbol>
    
    <symbol id="social__twitter" viewBox="0 0 512 512">
      <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
        C480.224,136.96,497.728,118.496,512,97.248z"/>
    </symbol>
    
    <symbol id="social__linkedin" viewBox="0 0 24 24">
      <g>
          <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/>
          <path d="m.396 7.977h4.976v16.023h-4.976z"/>
          <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/>
      </g>
    </symbol>
    <symbol id="social__medium" viewBox = "0 0 54 54">
        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Black" transform="translate(-800.000000, -463.000000)" fill="currentColor">
            <g id="Medium" transform="translate(800.000000, 463.000000)">
                <path d="M47.474 7.338c-.009-.007-.016-.017-.027-.022l-.017-.008L33.134.213a1.487 1.487 0 0 0-.3-.106 1.598 1.598 0 0 0-.393-.053c-.548 0-1.092.273-1.388.748l-8.23 13.275 10.329 16.658 14.366-23.17a.172.172 0 0 0-.044-.227"
                      id="Fill-53"/>
                <path id="Fill-54" d="M18.29 11.053v15.11l13.532 6.716L18.29 11.053"/>
                <path d="M33.855 33.888l11.14 5.528c1.45.72 2.624.215 2.624-1.125V11.69l-13.764 22.2" id="Fill-55"/>
                <path d="M33.855 33.888l11.14 5.528c1.45.72 2.624.215 2.624-1.125V11.69l-13.764 22.2" id="Fill-55"/>
                <path d="M15.94 7.36L1.979.43a1.611 1.611 0 0 0-.71-.184c-.61 0-1.04.47-1.04 1.258v29.919c0 .8.591 1.75 1.313 2.107l12.297 6.103c.316.156.616.23.887.23.765 0 1.3-.587 1.3-1.572V7.496a.152.152 0 0 0-.084-.136"
                      id="Fill-56"/>
            </g>
        </g>
      </g>
    </symbol>
    
</svg>
`

window.addEventListener("DOMContentLoaded", () => {
    const svgElement = document.createElement("div")

    svgElement.innerHTML = icons

    document.body.prepend(svgElement)
})
