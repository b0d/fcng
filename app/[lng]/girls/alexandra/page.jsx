import "../../globals.css";
import "./index.css";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import Image from "next/image";
import BigForm from "../../../components/BigForm/index";

import { useTranslation } from "../../../i18n";
import BreadCrumbs from "../../../components/BreadCrumbs";

export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("Ladies.lady.2.title"),
		description: t("Ladies.lady.2.description"),
	};
}

export default async function Emma({ params }) {
	const { lng } = await params;
	const { t } = await useTranslation(lng);

	return (
		<section>
			<Header lng={lng} />
			<div className='col-12'>
				<BreadCrumbs
					getcontent={t("Ladies.beforeModelName")}
					lng={lng}
					sendt={t("Ladies.lady.2.name")}
				/>
			</div>
			<div className='x'>
				<div className='h2-title'>
					<h1>
						{t("Ladies.beforeModelName")} {t("Ladies.lady.2.name")}
					</h1>
				</div>

				<div className='container d-flex flex-row flex-wrap girls-block'>
					<div className='col-12 col-sm-6'>
						<Image
							src={t("Ladies.lady.2.img.0")}
							alt={t("Ladies.lady.2.alt")}
							width={850}
							height={1250}
						/>
					</div>
					<div className='col-12 col-sm-6'>
						<Image
							src={t("Ladies.lady.2.img.1")}
							alt={t("Ladies.lady.2.alt")}
							width={850}
							height={1250}
						/>
					</div>
				</div>

				<div className='container d-flex flex-row flex-wrap girls-block'>
					<div className='col-12 col-sm-6'>
						<Image
							src={t("Ladies.lady.2.img.2")}
							alt={t("Ladies.lady.2.alt")}
							width={850}
							height={1250}
						/>
					</div>
					<div className='col-12 col-sm-6'>
						<Image
							src={t("Ladies.lady.2.img.3")}
							alt={t("Ladies.lady.2.alt")}
							width={850}
							height={1250}
						/>
					</div>
				</div>
			</div>
			<BigForm lng={lng} />
			<Footer lng={lng} />
		</section>
	);
}
