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
import "bootstrap-icons/font/bootstrap-icons.css";
export default async function Header({ lng }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);

	return (
		<header className='d-flex container-fluid'>
			<div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 d-flex flex-row'>
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
					<div className='col-12 col-sm-7 tel d-flex justify-content-center'>
						<a href={t("Header.phoneIn")} rel='nofollow'>
							<span className='px-2'>
								<i className='bi bi-phone-vibrate'></i>
							</span>
							{t("Header.phone")}
						</a>
					</div>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex flew-column flex-wrap justify-content-between align-items-center'>
				<div className='col-12 col-sm-7 header-addres text-left align-items-center'>
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
				<div className='col-12 col-sm-5 header-ruels d-flex justify-content-between'>
					<div className='header-time-logo'>24/7</div>
					<div className='header-time-logo'>18+</div>
					<div className='header-time-logo text-center'>
						no <br /> sex
					</div>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 d-flex flew-row flex-wrap align-items-center justify-content-end'>
				<div className='col-12 col-sm-7 col-md-8 header-sides'>
					<div className='header-menu'>
						<nav className='menu-header-menu-container'>
							<ul className='menu'>
								<li className='menu-item'>
									<Link href={`/${lng}/`}>{t("Header.menu1")}</Link>
								</li>
								<li className='menu-item'>
									<Link
										href='https://goo.gl/maps/77p1Baxn7UpZ4rtC7'
										locale='ru'
									>
										{t("Header.menu5")}
									</Link>
								</li>
								<li className='menu-item'>
									<Link href={`/${lng}/vacancies/`} lng={lng}>
										{t("Header.menu4")}
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='col-12 col-sm-5 col-md-4 header-lang'>
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
		</header>
	);
}
