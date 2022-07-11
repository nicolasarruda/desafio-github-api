import ContentLoader from "react-content-loader";

const GithubCardLoaderMobile = () => (
  <ContentLoader 
    speed={2}
    width={320}
    height={320}
    viewBox="0 0 320 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="70" y="16" rx="3" ry="3" width="150" height="150" /> 
    <rect x="50" y="186" rx="3" ry="3" width="200" height="20" /> 
    <rect x="50" y="217" rx="3" ry="3" width="200" height="20" /> 
    <rect x="50" y="246" rx="3" ry="3" width="200" height="20" /> 
    <rect x="50" y="275" rx="3" ry="3" width="200" height="20" />
  </ContentLoader>
)

export default GithubCardLoaderMobile;

