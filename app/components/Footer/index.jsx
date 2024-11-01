import "./index.css";
import Image from "next/image";
import tg from "./tg.webp";
import vb from "./viber.webp";
import wh from "./whatsapp.webp";
import ru from "./ru.webp";
import ua from "./ua.webp";
import gb from "./gb.webp";
import Link from "next/link";
import { useTranslation } from "../../i18n/";

export default async function Footer({ lng }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);

	return (
		<footer className='d-flex container flex-wrap'>
			<div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 d-flex flex-row'>
				<div className='col-12 header-tel d-flex flex-row align-items-center flex-wrap'>
					<div className='col-12 col-sm-5 icons d-flex flex-row justify-content-between'>
						<a href='tg://resolve?domain=Erotic_Massage_Lviv'>
							<Image height={25} width={25} src={tg} alt={t("Header.altTg")} />
						</a>
						<a href='viber://chat?number=380960336636'>
							<Image height={25} width={25} src={vb} alt={t("Header.altVb")} />
						</a>
						<a href='whatsapp://send?phone=+380960336636'>
							<Image height={25} width={25} src={wh} alt={t("Header.altWh")} />
						</a>
					</div>
					<div className='col-12 col-sm-7 tel d-flex  text-center justify-content-center'>
						<a href={t("Header.phoneIn")} rel='nofollow'>
							<span className='px-2'>
								<i className='bi bi-phone-vibrate'></i>
							</span>{" "}
							{t("Header.phone")}
						</a>
					</div>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flew-column justify-content-center align-items-center'>
				<div className='header-addres text-center align-items-center'>
					<a
						href='https://goo.gl/maps/77p1Baxn7UpZ4rtC7'
						className='d-flex align-items-center'
					>
						<span className='px-2'>
							<i className='bi bi-map'></i>
						</span>
						{t("Header.address")}
					</a>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flew-row align-items-center justify-content-center'>
				<div className='header-sides'>
					<div className='header-menu'>
						<nav className='menu-header-menu-container'>
							<ul className='menu justify-content-center'>
								<li className='menu-item'>
									<Link href={`/${lng}/`}>{t("Header.menu1")}</Link>
								</li>
								<li className='menu-item'>
									<Link href={`/${lng}/o-nas`}>{t("Header.menu2")}</Link>
								</li>
								<li className='menu-item'>
									<Link href={`/${lng}/kontakty/`}>{t("Header.menu3")}</Link>
								</li>
								<li className='menu-item'>
									<a href='https://goo.gl/maps/77p1Baxn7UpZ4rtC7'>
										{t("Header.menu5")}
									</a>
								</li>
								<li className='menu-item'>
									<Link href={`/${lng}/blog/`}>{t("Header.menu6")}</Link>
								</li>
								<li className='menu-item'>
									<Link href={`/${lng}/vacancies/`}>{t("Header.menu4")}</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='header-lang'>
					<ul className='d-flex justify-content-end'>
						<li className='lang-butt d-flex'>
							<Link href='/uk' locale='uk'>
								<Image
									height={12}
									width={18}
									src={ua}
									alt='erotic massage ukraine'
								/>
							</Link>
						</li>
						<li className='lang-butt'>
							<Link href='/ru' locale='ru'>
								<Image
									height={12}
									width={18}
									src={ru}
									alt='erotic massage russia'
								/>
							</Link>
						</li>
						<li className='lang-butt'>
							<Link href='/en' locale='en'>
								<Image
									height={12}
									width={18}
									src={gb}
									alt='erotic massage english'
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);

	(function (i, s, o, g, r, a, m) {
		i["GoogleAnalyticsObject"] = r;
		(i[r] =
			i[r] ||
			function () {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m);
	})(
		window,
		document,
		"script",
		"https://www.google-analytics.com/analytics.js",
		"ga"
	);
	ga("create", "UA-104198811-1", "auto");
	ga("send", "pageview");
}
