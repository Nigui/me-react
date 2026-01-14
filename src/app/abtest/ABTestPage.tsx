import FlagshipService from "../components/Flagship";

export function ABTestingPage({ className }: { className?: string }) {
  return (
    <div
      className={`w-screen h-screen bg-primary text-white flex flex-col ${className}`}
    >
      <h1 className="text-3xl text-center p-10 font-bold">
        Demo page to do some ABTesting
      </h1>
      <iframe src="https://www.nigui.fr/search" className="h-96 w-1/4" />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
          vestibulum tortor eu iaculis. Duis hendrerit pellentesque egestas.
          Pellentesque at quam condimentum, imperdiet leo sed, congue risus.
          Fusce a vehicula ex. Sed tempor ac ante eu imperdiet. Aliquam quam
          risus, pretium non tellus in, maximus tincidunt ipsum. Vivamus rutrum,
          lorem nec luctus condimentum, est eros auctor massa, non tristique leo
          tellus ac ante. Proin porttitor quam eget purus scelerisque, vel
          imperdiet
        </p>
        <p>
          risus molestie. Sed ultricies in lorem ut fringilla. In nisi metus,
          pretium at metus quis, malesuada ornare elit. Aenean pellentesque
          elementum odio ac venenatis. Maecenas enim nisl, luctus eget faucibus
          et, suscipit sed enim. Pellentesque interdum, turpis eget congue
          molestie, tellus odio sodales est, sed imperdiet eros purus eu sem.
          Praesent rutrum ultricies ex, pretium tincidunt diam sodales dictum.
          In diam lacus, varius at neque sit amet, tincidunt gravida ipsum.
          Maecenas mollis interdum nisl id facilisis. Nullam eu orci volutpat
          sapien commodo pulvinar vel ut nisl. Curabitur massa orci, tempor eget
          convallis at, aliquet sed libero. Nulla magna nisl, efficitur sit amet
          turpis ac, viverra volutpat purus. Sed in pellentesque eros. Praesent
          eu nunc vitae lorem pretium aliquam id vel lacus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Aliquam vehicula tincidunt egestas. Sed sodales, quam
          a tristique
        </p>
        <p>
          ultricies, ipsum felis egestas ex, at consequat neque neque ut quam.
          Donec et placerat lectus. Vestibulum lacinia odio sit amet lacus
          efficitur dictum. Etiam id rhoncus justo. Ut ornare aliquam dolor in
          vehicula. Duis molestie ornare ipsum, non efficitur sem sollicitudin
          in. Proin quis massa quis dolor rhoncus placerat. Sed dapibus velit id
          diam viverra, nec suscipit justo imperdiet. Sed vel rhoncus nibh.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut venenatis vulputate nunc, in auctor mi
          lacinia at. Etiam vitae risus lacus. Etiam quis ultricies magna.
          Suspendisse eu sapien ac urna lobortis auctor in at erat. Aenean
          dapibus varius quam. Donec dignissim sapien quis leo ullamcorper
          eleifend. Etiam a dignissim orci, vel convallis urna. Pellentesque in
          elit malesuada, tempus sem eu, egestas nisl. Morbi lacinia turpis
          ipsum, quis suscipit magna dictum dapibus. Aliquam id tortor et eros
          lobortis consectetur
        </p>
        <p>
          hendrerit non dolor. In hac habitasse platea dictumst. Maecenas tempus
          tortor ut maximus scelerisque. Nullam at lectus id leo tempus
          facilisis. Donec eros odio, iaculis vitae iaculis ullamcorper, porta
          quis mauris. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aenean convallis eros sed tempus luctus. Cras auctor libero
          sit amet tortor pulvinar, vitae feugiat velit porttitor. Proin sed
          lobortis turpis, nec tincidunt odio. Maecenas tincidunt risus eu sem
          aliquet tincidunt. Ut dapibus nulla sed accumsan vulputate.
          Pellentesque rutrum tincidunt arcu. Donec sit amet mauris ante. Aenean
          eget risus non sapien pellentesque venenatis in ac nunc. Proin ut
          sollicitudin risus. Nullam aliquet justo vitae tempor condimentum.
          Phasellus finibus tortor vitae
        </p>
        <p>
          tristique tempus. Nunc nec aliquet ex. Fusce condimentum vehicula nisi
          sit amet auctor. Fusce consectetur lorem sed purus maximus, eget
          ultrices lorem aliquet. Duis orci mauris, faucibus ut dapibus eget,
          tempus at tellus. Aliquam sit amet elementum neque. Praesent sit amet
          dignissim est. In rhoncus viverra vestibulum. Suspendisse sed nisi ut
          velit pharetra vestibulum ac vitae nulla. Vestibulum pretium vitae
          enim et vehicula. Maecenas non tincidunt justo. Sed eu condimentum
          felis.
        </p>
      </main>
    </div>
  );
}
