function introSectionWithDropDown (){ 
  
    return(
        <div>
            <ul className="nav nav-tabs">
                <img id="logo-image" src="logo.svg" alt="Company logo"/>
            <li id="nav-begining" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Features</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><img className="dropdown-item-img" src="icon-todo.svg"/>Todo List</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><img className="dropdown-item-img" src="icon-calendar.svg"/>Calendar</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><img className="dropdown-item-img" src="icon-reminders.svg"/>Reminders</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><img className="dropdown-item-img" src="icon-planning.svg"/>Planing</a>
                    </li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Company</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">History</a>
                    </li>
                    <li><a className="dropdown-item" href="#">Our team</a>
                    </li>
                    <li><a className="dropdown-item" href="#">Blog</a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <button id="btn-sep" className="btn btn-nav-bar rounded-3">Login</button>
                <button className="btn btn-nav-bar rounded-3">Register</button>
            </ul>
            <div className="row">
                <div className="col">
                    <p className="big-text">Make remote work</p>
                    <p className="small-text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className="btn btn-main rounded-3">Learn more</button>
                    <div className="row logo">
                        <div className="col">
                            <img className="img-logo" src="client-databiz.svg" alt="Image of databiz"/>
                        </div>
                        <div className="col">
                            <img className="img-logo" src="client-audiophile.svg" alt="Image of audiophile"/>
                        </div>
                        <div className="col">
                            <img className="img-logo" src="client-meet.svg" alt="Image of meet"/>
                        </div>
                        <div className="col">
                            <img className="img-logo" src="client-maker.svg" alt="Image of maker"/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img className="img-fluid img" src="image-hero-desktop.png" alt="image of guy"/>
                </div>
            </div>   
        </div>  
    )
}
 

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(introSectionWithDropDown())