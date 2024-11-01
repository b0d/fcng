import "../globals.css";
import "./index.css";
import BlogComponent from "../../components/BlogComponent/index";
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
		title: t("Blog.title"),
		description: t("Blog.description"),
	};
}

export default async function Blog({ params }) {
	const { lng } = await params;
	const { t } = await useTranslation(lng);

	return (
		<section>
			<Header lng={lng} />
			<div className='col-12'>
				<BreadCrumbs
					getcontent='Blog'
					lng={lng}
					sendt={t("Blog.beforeModelName")}
				/>
			</div>
			<div className='container'>
				<div className='col-12'>
					<h1>{t("Blog.mainh1")}</h1>
				</div>
				<div className='d-flex flex-row flex-wrap blog-box text-center'>
					<BlogComponent
						linkNeeded={t("Blog1.link")}
						headerNeeded={t("Blog1.mainh1")}
						pictureNeeded={t("Blog1.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog2.link")}
						headerNeeded={t("Blog2.mainh1")}
						pictureNeeded={t("Blog2.img")}
						lng={lng}
					/>

					<BlogComponent
						linkNeeded={t("Blog3.link")}
						headerNeeded={t("Blog3.mainh1")}
						pictureNeeded={t("Blog3.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog4.link")}
						headerNeeded={t("Blog4.mainh1")}
						pictureNeeded={t("Blog4.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog5.link")}
						headerNeeded={t("Blog5.mainh1")}
						pictureNeeded={t("Blog5.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog6.link")}
						headerNeeded={t("Blog6.mainh1")}
						pictureNeeded={t("Blog6.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog7.link")}
						headerNeeded={t("Blog7.mainh1")}
						pictureNeeded={t("Blog7.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog8.link")}
						headerNeeded={t("Blog8.mainh1")}
						pictureNeeded={t("Blog8.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog9.link")}
						headerNeeded={t("Blog9.mainh1")}
						pictureNeeded={t("Blog9.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog10.link")}
						headerNeeded={t("Blog10.mainh1")}
						pictureNeeded={t("Blog10.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog11.link")}
						headerNeeded={t("Blog11.mainh1")}
						pictureNeeded={t("Blog11.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog12.link")}
						headerNeeded={t("Blog12.mainh1")}
						pictureNeeded={t("Blog12.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog13.link")}
						headerNeeded={t("Blog13.mainh1")}
						pictureNeeded={t("Blog13.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog14.link")}
						headerNeeded={t("Blog14.mainh1")}
						pictureNeeded={t("Blog14.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog15.link")}
						headerNeeded={t("Blog15.mainh1")}
						pictureNeeded={t("Blog15.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog16.link")}
						headerNeeded={t("Blog16.mainh1")}
						pictureNeeded={t("Blog16.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog17.link")}
						headerNeeded={t("Blog17.mainh1")}
						pictureNeeded={t("Blog17.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog18.link")}
						headerNeeded={t("Blog18.mainh1")}
						pictureNeeded={t("Blog18.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog19.link")}
						headerNeeded={t("Blog19.mainh1")}
						pictureNeeded={t("Blog19.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog20.link")}
						headerNeeded={t("Blog20.mainh1")}
						pictureNeeded={t("Blog20.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog21.link")}
						headerNeeded={t("Blog21.mainh1")}
						pictureNeeded={t("Blog21.img")}
						lng={lng}
					/>
					<BlogComponent
						linkNeeded={t("Blog22.link")}
						headerNeeded={t("Blog22.mainh1")}
						pictureNeeded={t("Blog22.img")}
						lng={lng}
					/>
				</div>
			</div>
			<BigForm lng={lng} />
			<Footer lng={lng} />
		</section>
	);
}
