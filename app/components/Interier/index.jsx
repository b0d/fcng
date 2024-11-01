import "./index.css";
import Image from "next/image";
import ClientPopup from "../PopUp/index";
export default function Interier() {
	const myImages = {
		src: {
			1: "/images/Interier/1.webp",
			2: "/images/Interier/2.webp",
			3: "/images/Interier/7.webp",
			4: "/images/Interier/4.webp",
			5: "/images/Interier/8.webp",
			6: "/images/Interier/6.webp",
			7: "/images/Interier/3.webp",
			8: "/images/Interier/5.webp",
		},
	};

	const howMuchProg = Object.keys(myImages.src);

	return (
		<section className='container d-flex flex-direction-row flex-wrap gallery justify-content-between'>
			{howMuchProg.slice(0).map((i) => (
				<div
					className='col-12 col-sm-4 d-flex justify-content-around'
					key={[i]}
				>
					<Image
						key={[i]}
						src={myImages.src[i]}
						alt='sss'
						width={300}
						height={300}
						loading='lazy'
						className='rounded img-fluid img-thumbnail m-1'
					></Image>
				</div>
			))}
			<div className='container d-flex justify-content-center'>
				<ClientPopup id='endbutt' name='endbutt' />
			</div>
		</section>
	);
}
