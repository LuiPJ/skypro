import { v4 as uuidv4 } from "uuid";

const ITEMS = [
  {
    id: uuidv4(),
    img: "R6",
    name: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: "120 000",
  },
  {
    id: uuidv4(),
    img: "R4",
    name: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: "21 000",
  },
  {
    id: uuidv4(),
    img: "R5",
    name: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: "34 000",
  },
  {
    id: uuidv4(),
    img: "R2D2",
    name: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: "68 000",
  },
  {
    id: uuidv4(),
    img: "R1",
    name: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: "40 000",
  },
  {
    id: uuidv4(),
    img: "R3",
    name: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: "80 000",
  },
];

export default ITEMS;
