import React from "react";

function article_1() {
	return {
		date: "Feb 2022",
		title: "Stock Market Prices Prediction Using Machine Learning",
		description:
			"International Journal of Research in Engineering and Science (IJRES)[Volume 10 Issue 2|| pp: 36-45]",
		keywords: [
			"Stock Market Prices Prediction Using Machine Learning",
			"Vaurun Teja Boorla",
			"https://www.ijres.org/papers/Volume-10/Issue-2/cert/Ser-6/IJRES-8.pdf",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<iframe
					src="https://www.ijres.org/papers/Volume-10/Issue-2/cert/Ser-6/IJRES-8.pdf"
					width="100%"
					height="600px"
					title="publication PDF"
					/>

					<div className="article-text">
						<p>
							Stock Market Prices Prediction Using Machine Learning
						</p>
						<p>
							Vaurun Teja Boorla
						</p>
						<p>
							International Journal of Research in Engineering and Science (IJRES)
						</p>
						<p>
							Volume 10 Issue 2|| pp: 36-45
						</p>
					</div>
					<div className="article-text" style={{ display: "flex", justifyContent: "center" }}>
    <iframe 
        src="https://docs.google.com/document/d/1Mm5i5pWDrHTQqRFgr3xOS75r99qV7f2BVtgH2vxpXcM/preview" 
        width="100%" 
        height="1400px" 
        style={{ border: "none", maxWidth: "500px" }} 
        title="publication doc"
    ></iframe>
</div>


                

				</div>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1];

export default myArticles;
