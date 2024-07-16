import loginINFO from "../../support/Page Object/OrangeHRM/LoginINFO";
import Link_PO from "../../support/Page Object/OrangeHRM/LinkINFO-PO";
import logoutINFO from "../../support/Page Object/OrangeHRM/LogoutINFO";

const Login = new loginINFO();
const Link = new Link_PO();
const Logout = new logoutINFO();

describe('Calling Classes', () => {
    it('Test1', () => {
        Login.enterURL();
        Login.Login();
        Link.linkclick("Admin");
        Logout.logout()
        
    });
});