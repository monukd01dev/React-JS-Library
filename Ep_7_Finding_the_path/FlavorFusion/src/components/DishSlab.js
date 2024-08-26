import { DISH_SLAB_IMG_URL } from "../../utils/constants";

const DishSlab = () => {
	return (
		<div class="dish-slab-con">
			<div class="slab">
				<div class="left">
					<div class="content">
						<div class="food-cat">
							<i class="fa-solid fa-square-caret-up" />
						</div>
						<div class="dish-name">Mini Treats</div>
						<div class="dish-price">₹ 499.4</div>
						<div class="dish-rating">
							<i class="fa-solid fa-star" /> 4.9(10)
						</div>
						<div class="dish-description">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Aliquam,officia? Lorem ipsum dolor, sit amet consectetur
							adipisicing elit.Laborum, vero.
						</div>
					</div>
				</div>
				<div class="right">
					<div class="img-con">
						<img
							src={DISH_SLAB_IMG_URL + "fc529e8c5a543ceb729d7786d1b0185"}
							alt=""
						/>
						<button type="button" className="img-con-btn">
							add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DishSlab;
