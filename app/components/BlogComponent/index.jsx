import "./index.css";
import sanitizeHtml from "sanitize-html";

import Image from "next/image";
import Link from "next/link";

export default function BlogComponent({
	linkNeeded,
	headerNeeded,
	pictureNeeded,
	lng,
}) {
	const textHeader = sanitizeHtml(headerNeeded, {
		p: (chunks) => `<p>${chunks}</p>`,
		h1: (chunks) => `<h1>${chunks}</h1>`,
		b: (chunks) => `<b>${chunks}</b>`,
		h2: (chunks) => `<h2>${chunks}</h2>`,
		ul: (chunks) => `<ul>${chunks}</ul>`,
		li: (chunks) => `<li>${chunks}</li>`,
		div: (chunks) => `<div>${chunks}</div>`,
	});
	console.log(pictureNeeded);
	return (
		<div className='blog-box-inner col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-1'>
			<Link lng={lng} href={linkNeeded}>
				<figure className='figure border border-danger'>
					<div className='blog-pic'>
						<Image
							loading='lazy'
							src={pictureNeeded}
							alt={textHeader}
							width={1000} // встановіть значення ширини, яке відповідає оригінальним пропорціям
							height={600} // встановіть відповідне значення висоти
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
					<figcaption className='figure-caption p-1 text-white text-start'>
						{textHeader}
					</figcaption>
				</figure>
			</Link>
		</div>
	);
}
