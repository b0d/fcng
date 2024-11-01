import "../../globals.css";
import "./index.css";
import Image from "next/image";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import BigForm from "../../../components/BigForm/index";
import { useTranslation } from "../../../i18n";
import BreadCrumbs from "../../../components/BreadCrumbs";
import sanitizeHtml from "sanitize-html";

export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("Blog8.title"),
		description: t("Blog8.description"),
	};
}

export default async function Blog8({ params }) {
	const { lng } = await params;
	const { t } = await useTranslation(lng);

	const textBlock = sanitizeHtml(
		t("Blog8.content", {
			p: (chunks) => `<p>${chunks}</p>`,
			b: (chunks) => `<b>${chunks}</b>`,
			h2: (chunks) => `<h2>${chunks}</h2>`,
			ul: (chunks) => `<ul>${chunks}</ul>`,
			li: (chunks) => `<li>${chunks}</li>`,
			div: (chunks) => `<div>${chunks}</div>`,
			h1: (chunks) => `<h1>${chunks}</h1>`,
			strong: (chunks) => `<b>${chunks}</b>`,
			h3: (chunks) => `<h3>${chunks}</h3>`,
			h4: (chunks) => `<h4>${chunks}</h4>`,
			a: (chunks) => `<a href='${t("SeoLink.Address")}'>${chunks}</a>`,
			br: (chunks) => `${chunks}<br/>`,
		})
	);
	return (
		<div>
			<Header lng={lng} />
			<BreadCrumbs
				getcontent={t("Blog8.beforeModelName")}
				sendt={t("Blog8.mainh1")}
				lng={lng}
			/>
			<section className='container'>
				<h1>{t("Blog8.mainh1")}</h1>
				<div className='col-12'>
					<div>
						<Image
							src={t("Blog8.img")}
							alt={t("Blog8.mainh1")}
							width={300}
							height={200}
							placeholder='empty'
							priority={true}
							className='float-end'
						/>
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: sanitizeHtml(textBlock),
						}}
					></div>
				</div>
			</section>
			<BigForm lng={lng} />
			<Footer lng={lng} />
		</div>
	);
}
