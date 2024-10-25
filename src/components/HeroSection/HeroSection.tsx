// import { Card, CardContent } from "@/components/ui/card";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import sliderImage4 from "@/assets/BannerPic (2).jpg";
// import sliderImage5 from "@/assets/BannerPic (3).jpg";

// export function HeroSection() {
//   const sliderData = [
//     {
//       id: 4,
//       image: sliderImage4,
//     },
//     {
//       id: 5,
//       image: sliderImage5,
//     },
//   ];

//   return (
//     <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] mt-6">
//       <Carousel
//         className="overflow-hidden rounded-lg shadow-lg"
//         plugins={[
//           Autoplay({
//             delay: 6000,
//           }),
//         ]}
//       >
//         <CarouselContent className="flex">
//           {sliderData.map((slider) => (
//             <CarouselItem key={slider.id} className="min-w-full relative">
//               <Card className="bg-transparent">
//                 <CardContent className="flex items-center justify-center h-[500px] md:h-[650px] lg:h-[750px] p-0 relative">
//                   {/* Slider Image */}
//                   <img
//                     src={slider?.image}
//                     className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
//                     alt=""
//                   />
//                   {/* Overlay Content */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex flex-col items-center justify-center text-white px-4 space-y-6 z-10">
//                     {/* Animated Title */}
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
//                       Welcome to PolishPro
//                     </h1>
//                     {/* Animated Subtitle */}
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light animate-fade-in-up max-w-3xl text-center">
//                     Clean Car, Happy You—Schedule Your Wash in a Click!
//                     </p>
//                     {/* Buttons */}
//                     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
//                       <a
//                         href="/products"
//                         className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-500 transform hover:scale-105"
//                       >
//                         Book Now
//                       </a>
//                       <a
//                         href="/about"
//                         className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
//                       >
//                         Learn More
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         {/* Previous/Next Buttons */}
//         <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-500 hover:scale-105">
//           &#9664;
//         </CarouselPrevious>
//         <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-500 hover:scale-105">
//           &#9654;
//         </CarouselNext>
//       </Carousel>
//     </div>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/BannerPic.jpg"
import sliderImage2 from "@/assets/BannerPic (2).jpg";
import sliderImage3 from "@/assets/BannerPic (3).jpg";
import sliderImage4 from "@/assets/BannerPic (4).jpg";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
    {
      id: 4,
      image: sliderImage4,
    },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] mt-6">
      <Carousel
        className="overflow-hidden rounded-lg shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full relative">
              <Card className="bg-transparent">
                <CardContent className="flex items-center justify-center h-full p-0 relative">
                  {/* Slider Image */}
                  <img
                    src={slider?.image}
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
                    alt=""
                  />
                  {/* Full Section Blurry Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center text-white px-4 space-y-6 z-10">
                    {/* Animated Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
                      Welcome to PolishPro
                    </h1>
                    {/* Animated Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light animate-fade-in-up max-w-3xl text-center">
                      Clean Car, Happy You—Schedule Your Wash in a Click!
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
                      <a
                        href="/products"
                        className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-500 transform hover:scale-105"
                      >
                        Book Now
                      </a>
                      <a
                        href="/about"
                        className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Previous/Next Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-500 hover:scale-105">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-500 hover:scale-105">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
