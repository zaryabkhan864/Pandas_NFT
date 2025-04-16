import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-component ">
                <div className="container-fluid px-0">
                    <div className="logo">
                        <img className='img-fluid w-sm-25' src='assets/images/logo.png' alt="" />
                    </div>
                    <div className="title d-none d-sm-block">THE PANDAS<br /> SOCIETY™</div>
                    <button className="navbar-toggler w-sm-20 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <img className='img-fluid' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAYAAABOScuyAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFN0lEQVRYhe1ZO4hdRRj+vpk559y7m81unmJiYqtJtAgBsbDwgZB0WoiFgk0sUiRGkICdpS8UtLK1ERTXxthbWyQSQWITCdqIRPS62XvPzPwW5zUz59xsgo/cBQf23nNm/vmf3/zzXZbv/fBjvmz025niCwR2AwABCOKn/tvwaGSGZFl/D63fSrcIbsxEPr5p3Wt85Oyr7xdZdk4rBessRBLFBCSwwFq7NNoZGAwsRg6EL0Nep3Po5EnAaAPnPaZl+abxyysvblBgvcfUC6Sx2mwMnoUCCuM5AUgBgvl2DqwMz0t5m8J6fSDtBFEoDZNl4Gh82iwdOLBbkxBWygXSBRlFS5ASZXEgl5URabYx+iSk53sEobCK6CrcCHgvu82uffuhlALIuIQQUBpfWSsSSO1Q5UAnW0EpdKlRJW0y+iE2yWGMEAZpaxa8h/cCs7Z3L6h1FQnZqWyyzc54kO5ATqI0NHhnLdsGBnQgbwKotwkDl9tDFKRWKqiKczDj8WiismyHMhlMltUKKsHOUKo8WWiT2jgYZJzN1tp1qfdFiZAkUEZm3ayEcxZ+Np2Y1SL/DF5eorMgBIRC1A6azPROchBBVO/gPZmWtu00Ttfw6rDQ2mOtx4vAOwuSkFHxqblX8dzGn5NlO5s9KyIaCzhIOpPnny+trLxilorid043n9u05ZJ3UkC6g1VJdxuH4AUZaKkDsG91xtBElNz2kIf2CaXUdJRnG0tFAWOshQFQUG1YuI3WWGC0LfJAb+45F8oHE23bSt7TQCXdA4EhYSDQtgSl31gXeqi77cCdjm3nsLnsAI3qDxg8L0Mw/cfGA3fYl4wHoCt/TxBYSQX+trO3Ij0EvndbqxDgDwd8c0zD8Z2r1w6NtfrKKHVUBbQxIijBfLsIAMKaqQVdJGE17YWWtrKWkyTydU8L7hYIgNL77256f5LHz5y9mBlzEgKUzmLRugZBZJkBAJTWXjR+ZeeTUwBeBDNrK6kIuDHXTUHdw/jtgD6VmUfu6+c8M1BVY37KrB28LyfZ0kvWHVxEkvtfOp8D3hojIPxMY+woULsaJIADhU3j8t7nZnX/PVCKACvSQ7LGWce80LAuqQ3WzIzJ9Sft/sbFgNcGmG70t6wscLjjUh3YSQBe4LyHWduzB9QKJEEVtuWQKKRHPa1dkE9BQhq2kA/n671tRZpp7yC+5sNFZq4rkx3SxkCZrMoQY1WV6oSM91zo6hEuRMw2wWb4LIHiiFt5gbMlpLTwrrxuVo1+y7nyAyUedBZUDdpCLswBo0kN2/IJpK4x0cGjX6H0EAzICCDiId7Bi0AZ/YY5OB5/OPntxk+u3DgNYH8cY3/EB2FILuGet5SdN3qyv5g8/+j1xx9bNzuXxjDerm9OJuu2tBj83ZU4G/8ACWASXCgS8MWwU6Qn/8LTT9xmELWJRbsothrbjq397/C/PcylgA8T24APAwCBhwk8T2BPKrAgfPhXB3xyTONbvnv12qlcqS+okDWrWxoN2ldEaodZT2t1cL1nIyQWzRLhRMqZ+FN86OUzV5RSR7332CxnED9gLAm3Rw1DAjaP7M/Tk9KKRIYERkUOrRSc81eM37n6oNQMS3s/4NTd58NiNJwAHnLE7Dt8v9pGfFhtPz68umvNUWuttF5YPuydhXiBt9aZXOvLpDqulFpcPgyBeAsYfcnsGo/O2+nsS7F2B2zIhwcUz3sPrIT/dWqY3dxxG11CampIzYkpRmfM4R3LX09seaTcnD4jIgf6mno6/nM+TPLnfDxev/Doiet/AQi4GiRlNPYpAAAAAElFTkSuQmCC" alt="" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between " id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex  mx-auto">
                            <div className="title text-center d-block d-sm-none">THE PANDAS<br /> SOCIETY™</div>
                            <a className="link active text-center" aria-current="page" href="#">Home</a>

                            <a className="link text-center" href="#">ABOUT US</a>
                            <a className="link text-center" href="#">UTILITIES</a>

                            <a className="link text-center" href="#">TEAM</a>
                            <a href="" target="_blank" className="link text-center">MERCH</a>
                          
                        </div>
                        <div className="navbar-nav d-flex w-sm-14 mx-auto">
                            <a href="" className='text-center ' target="blank">
                                <img className=' w-75 img-fluid' src='assets/images/discord1.png' alt="" />
                            </a>
                            <a href="" className='text-center ' target="blank">
                                <img className=' w-75 img-fluid' src='assets/images/whitelist1.png' alt="" />
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </>


    )
}

export default Navbar