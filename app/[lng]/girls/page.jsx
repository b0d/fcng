import "../globals.css";
import "./index.css";
import Ladies from "../../components/Ladies/index";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import BigForm from "../../components/BigForm/index";
import { useTranslation } from "../../i18n";
import BreadCrumbs from "../../components/BreadCrumbs";

export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("Girls.title"),
		description: t("Girls.description"),
	};
}

export default async function LadiesPage({ params }) {
	const { lng } = await params;
	const { t } = await useTranslation(lng);
	return (
		<div>
			<Header lng={lng} />
			<div className='col-12'>
				<BreadCrumbs
					getcontent='Ladies'
					lng={lng}
					sendt={t("Ladies.ladiesGroupName")}
				/>
			</div>
			<div className='container'>
				<h1>{t("Ladies.ladiesGroupName")}</h1>
			</div>
			<Ladies lng={lng} />
			<BigForm lng={lng} />
			<Footer lng={lng} />
		</div>
	);
}
