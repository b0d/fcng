import "../globals.css";
import "./index.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Image from "next/image";
import BigForm from "../../components/BigForm/index";
import sanitizeHtml from "sanitize-html";
import { useTranslation } from "../../i18n";
import BreadCrumbs from "../../components/BreadCrumbs";
export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("Onas.title"),
		description: t("Onas.description"),
	};
}
export async function generateStaticParams() {
	const locales = ["uk", "en", "ru"]; // List of locales you want to support

	return locales.map((locale) => ({
		locale, // Return an object for each dynamic path
	}));
}
export default async function Onas({ params }) {
	const { lng } = await params;
	const { t } = await useTranslation(lng);

	return (
		<div className='Onas'>
			<Header lng={lng} />
			<div className='col-12'>
				<BreadCrumbs getcontent='Onas' lng={lng} sendt={t("Onas.mainh1")} />
			</div>
			<h1 className='h2-title'>{t("Onas.mainh1")}</h1>

			<div className='container page-description'>
				<div>
					<div className='d-flex flex-direction-row flex-wrap'>
						<div
							className='col-12 col-lg-7'
							dangerouslySetInnerHTML={{
								__html: sanitizeHtml(
									t("Onas.content", {
										p: (chunks) => `<p>${chunks}</p>`,
										b: (chunks) => `<b>${chunks}</b>`,
										h2: (chunks) => `<h2>${chunks}</h2>`,
										ul: (chunks) => `<ul>${chunks}</ul>`,
										li: (chunks) => `<li>${chunks}</li>`,
										div: (chunks) => `<div>${chunks}</div>`,
										h1: (chunks) => `<h1>${chunks}</h1>`,
										h3: (chunks) => `<h3>${chunks}</h3>`,
										a: (chunks) =>
											`<a href='http://empire-massage.lviv.ua/'>${chunks}</a>`,
										br: (chunks) => `${chunks}<br/>`,
									})
								),
							}}
						></div>
						<div className='col-12 col-lg-5 p-3'>
							<Image
								src={t("Onas.img")}
								width={0}
								height={0}
								sizes='100vw'
								style={{
									width: "100%",
									height: "auto",
									padding: "0 15px 15px",
								}}
								alt={t("Onas.mainh1")}
							/>
							<BigForm lng={lng} />
						</div>
					</div>
				</div>
			</div>

			<Footer lng={lng} />
		</div>
	);
}
