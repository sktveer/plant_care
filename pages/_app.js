import '../index.css'; // Import Tailwind CSS here
import '../pages/index.css'; // For any existing styles in `index.css`

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
