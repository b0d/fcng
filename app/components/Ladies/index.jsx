import "./index.css";
import Image from "next/image";
import { useTranslation } from "../../i18n/";
export async function generateMetadata({ params }) {
	const { lng } = await params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	return {
		title: t("Girls.title"),
		description: t("Girls.description"),
	};
}
export default async function Ladies({ lng }) {
	//const { lng } = await params;

	const { t } = await useTranslation(lng);
	return (
		<article>
			<div className='container ladies-screen d-flex flex-column justify-content-around '>
				<div className='d-flex flex-row flex-wrap'>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={`/${lng}/girls/${t("Ladies.lady.0.id")}`}>
								<Image
									loading='lazy'
									src={t("Ladies.lady.0.facePic")}
									height={300}
									width={300}
									alt={t("Ladies.lady.0.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{t("Ladies.lady.0.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={`/${lng}/girls/${t("Ladies.lady.1.id")}`}>
								<Image
									loading='lazy'
									src={t("Ladies.lady.1.facePic")}
									height={300}
									width={300}
									alt={t("Ladies.lady.1.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{t("Ladies.lady.1.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={`/${lng}/girls/${t("Ladies.lady.2.id")}`}>
								<Image
									loading='lazy'
									src={t("Ladies.lady.2.facePic")}
									height={300}
									width={300}
									alt={t("Ladies.lady.2.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{t("Ladies.lady.2.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
				</div>
			</div>
		</article>
	);
}
