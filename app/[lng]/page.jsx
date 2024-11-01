import "./globals.css";

import FirstScreen from "../components/FirstScreen/index";
import Header from "../components/Header/index";
import ContentScreen from "../components/ContentScreen/index";
import ProgramsScreen from "../components/ProgramsScreen/index";
import Ladies from "../components/Ladies/index";
import Interier from "../components/Interier/index";
import ClientPopup from "../components/PopUp/index";
import Footer from "../components/Footer/index";
import BigForm from "../components/BigForm/index";
import { useTranslation } from "../i18n";
export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("HomePage.title"),
		description: t("HomePage.description"),
	};
}
export default async function Home({ params }) {
	const { lng } = await params;
	console.log(lng);
	return (
		<>
			<div className='d-flex flex-column'>
				<Header lng={lng} />
				<FirstScreen lng={lng} />
				<section>
					<ContentScreen textNeeded='1' lng={lng} />
				</section>
				<section className='dops'>
					<ContentScreen textNeeded='6' lng={lng} />
					<ProgramsScreen lng={lng} />
				</section>
				<ContentScreen textNeeded='5' lng={lng} />
				<Ladies lng={lng} />
				<section>
					<ContentScreen textNeeded='2' lng={lng} />
				</section>
				<section className='container d-flex justify-content-center'>
					<ClientPopup id='endbutt' name='endbutt' />
				</section>
				<section>
					<ContentScreen textNeeded='3' lng={lng} />
				</section>
				<Interier />
				<section>
					<ContentScreen textNeeded='4' lng={lng} />
				</section>
				<BigForm lng={lng} />
				<Footer lng={lng} />
			</div>
		</>
	);
}
