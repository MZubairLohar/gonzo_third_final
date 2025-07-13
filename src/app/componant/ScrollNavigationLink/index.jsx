
// "use client";
// import { Link as ScrollLink } from 'react-scroll';
// import { useRouter } from 'next/router'; // For older Next.js versions
// // Inside your component

// const ScrollNavigationLink = ({ to, children }) => {
  
//     const router = useRouter();
  
//     const handleClick = (e) => {
//       if (router.pathname !== "/") {
//         e.preventDefault();
//         router.push("/").then(() => {
//           setTimeout(() => {
//             const section = document.getElementById(to);
//             if (section) {
//               window.scrollTo({
//                 top: section.offsetTop - 100,
//                 behavior: "smooth"
//               });
//             }
//           }, 100);
//         });
//       }
//     };
  
//     return (
//       <ScrollLink
//         to={to}
//         smooth={true}
//         duration={600}
//         offset={-100}
//         onClick={handleClick}
//         className="block py-2 px-3 cursor-pointer text-[#f8b447] rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#a62122] md:p-0"
//       >
//         {children}
//       </ScrollLink>
//     );
//   };
  

//   export default ScrollNavigationLink;
"use client";
import { Link as ScrollLink } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';

const ScrollNavigationLink = ({ to, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    // If not on home page, navigate first then scroll
    if (pathname !== "/") {
      e.preventDefault();
      router.push("/");
      
      // Store scroll target in session storage
      sessionStorage.setItem('scrollTarget', to);
      
      // The actual scroll will happen after navigation
      return;
    }
    
    // If already on home page, let react-scroll handle it
  };

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={600}
      offset={-100}
      onClick={handleClick}
      className="block py-2 px-3 cursor-pointer text-[#f8b447] rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#a62122] md:p-0"
      spy={true}
    >
      {children}
    </ScrollLink>
  );
};

// Add this to your _app.js or layout.js to handle post-navigation scroll
export const ScrollHandler = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === "/") {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        const section = document.getElementById(scrollTarget);
        if (section) {
          setTimeout(() => {
            window.scrollTo({
              top: section.offsetTop - 100,
              behavior: "smooth"
            });
            sessionStorage.removeItem('scrollTarget');
          }, 100);
        }
      }
    }
  }, [pathname]);

  return null;
};

  export default ScrollNavigationLink;

// Usage in your layout file:
// <ScrollHandler />