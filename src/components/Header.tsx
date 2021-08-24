
const Header = () => {
    return (
        <div className="row text-white mt-3 border-bottom">
            <div className="col">
                <h6 className="">Developed By Technical Haji</h6>

            </div>
            <div className="col text-end">
                <a
                    title="facebook"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/technicalhajiofficial"
                >
                    <i className="fab fa-facebook text-white fs-6 "></i>
                </a>
                <a
                    title="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/afaqshaikh"
                >
                    <i className="fab fa-github text-white fs-6  ps-2"></i>
                </a>
                <a
                    title="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad-afaque-68a830202/"
                >
                    <i className="fab fa-linkedin text-white fs-6 ps-2"></i>
                </a>
            </div>
        </div>
    )
}

export default Header