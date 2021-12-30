import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Footer = () => {
    return(
        <div className="footer">
		<div className="container">
			<div className="col-md-4 agileinfo_footer_grid">
				<h4>Facebook</h4>
				<iframe title="Facebook Embed" src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Texas-Patios-Concrete-1642632669364250/&tabs&width=300&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1728702850710042" width="300" height="214" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
			</div>
			<div className="col-md-4 agileinfo_footer_grid">
				<h4>Instagram Posts</h4>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPVFVOwB1IE/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/concrete15.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPVFh78B0i-/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/patio_cover26.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPVFRe6hg_X/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/firepit1.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPVFEBahvUU/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/outdoor_kitchen21.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPGWRJFAPLV/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/concrete4.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="agileinfo_footer_grid1">
					<a href="https://www.instagram.com/p/BPGWWBxA-R-/?taken-by=texas_patios_and_concrete" target="_blank" rel="noreferrer">
					<StaticImage src="../images/patio_cover36.jpg" alt=" " className="img-responsive" /></a>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="col-md-4 agileinfo_footer_grid">
				<h4>Connect with us</h4>
				<ul>
					<li><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Po Box 51635  Denton tx 76206 -1635</li>
					<li className="email"><a href="mailto:texaspatiosandconcrete@gmail.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>texaspatiosandconcrete@gmail.com</a></li>
					<li className="mobile"><a href="tel:+1 469 771 8612"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>Call 469-771-8612</a></li>
					<li className="mobile"><a href="sms:+1 469 771 8612"><span className="glyphicon glyphicon-phone" aria-hidden="true"></span>Text 469-771-8612</a></li>
				</ul>
			</div>
			
			<div className="clearfix"> </div>
			<div className=" newsletter">
				   <h4>Social media</h4>
				   <div className="social">
					<ul>
						<li><a href="https://www.facebook.com/Texas-Patios-Concrete-1642632669364250/" className="link facebook" target="_blank" rel="noreferrer"><span className="fa fa-facebook-square" aria-label="Facebook Icon"></span></a></li>
						<li><a href="https://www.instagram.com/texas_patios_and_concrete/" className="link instagram" target="_blank" rel="noreferrer"><span className="fa fa-instagram" aria-label="Instagram Icon"></span></a></li>
					</ul>
				</div>
					<div className="clearfix"> </div>
				</div>
			<div className="w3agile_footer_copy">
				<p>© 2017 TEXASPATIOSANDCONCRETE.COM. All rights reserved | By <a href="http://www.rkpaginasweb.com" target="_blank" rel="noreferrer">RK Paginas Web.</a></p>
			</div>
		</div>
	</div>
    )
}

export default Footer;