import { Container } from "@mui/material";
import { Google, Facebook } from '@mui/icons-material'
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container maxWidth="lg" sx={{height: "100%"}} >
          <div className="footer-content">
            <div className="footer-content-left">
              <Google/>
              <Facebook/>
            </div>
            <div className="footer-content-right">
              Bản quyền thuộc về{" "}
              <a
                href="https://github.com/vandatnguyenn/numberio"
                target="_blank"
                rel="noreferrer"
              >
                Team 3
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
