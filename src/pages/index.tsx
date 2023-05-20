import React, { useCallback, useEffect, useState } from "react";

export const dataImage = [
  {
    title: "0",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eA4njppJycpcrF5mqpynKLo8nZCQDVGjv5gUZH8-BI0R6vELBOoDB5fcjbutMmmA7Y4&usqp=CAU",
  },
  {
    title: "1",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/lucky777-neon.png",
  },
  {
    title: "2",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/fruitslot-neon.png",
  },
  {
    title: "3",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/oceanking3-neon.png",
  },
  {
    title: "4",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/fruitslot-neon.png",
  },
  {
    title: "5",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/PLINKO2-1.png",
  },
  {
    title: "6",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/lucky777-neon.png",
  },
  {
    title: "7",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/PLINKO2-1.png",
  },
  {
    title: "8",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/oceanking3-neon.png",
  },
  {
    title: "9",
    imageSrc:
      "https://gamevault999.com/wp-content/uploads/2022/04/fruitslot-neon.png",
  },
];

const CarouselSlide1Item = () => {
  const [dataToShow, setMyData] = useState(dataImage);

  function rollUpArray(array: any) {
    const rolledArray = [];
    for (let i = 0; i < array.length; i++) {
      const rolledIndex = (i + 1) % array.length;
      rolledArray[rolledIndex] = array[i];
    }

    setMyData(rolledArray);
  }

  const continuousFunction = useCallback(() => {
    rollUpArray(dataToShow);
  }, [dataToShow]);

  useEffect(() => {
    const intervalId = setInterval(continuousFunction, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [continuousFunction]);

  return (
    <div className="flex items-end p-10 my-20 bg-gray-700 border-4 border-green-400 w-fit">
      {dataToShow.slice(0, 5).map((data, index) => {
        let width = 180;
        let height = 270;

        if (index === 1) {
          width = 200;
          height = 300;
        }
        if (index === 2) {
          width = 220;
          height = 330;
        }
        if (index === 3) {
          width = 240;
          height = 360;
        }
        if (index === 4) {
          width = 280;
          height = 390;
        }
        // let zInex;
        // if (index === 1 || index === 2 || index === 3) {
        //   zInex = "!z-50";
        // }
        return (
          <div
            key={data.title}
            style={{
              height: height,
              width: width,
              // border: "2px solid red",
            }}
            className={`ml-10 text-[30px] ${
              index === 1 || index === 2 || (index === 3 && "!z-50")
            } object-fill bg-cover bg-no-repeat  w-full`}
          >
            <picture>
              <img
                src={data.imageSrc}
                alt={data.title}
                className={`w-full h-full ${
                  dataToShow.length >= 5 && `image_${index}`
                } `}
              />
            </picture>
            {data.title}
          </div>
        );
      })}
    </div>
  );
};

export default CarouselSlide1Item;
