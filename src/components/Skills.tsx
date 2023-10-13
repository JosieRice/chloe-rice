import Image from "next/image";

export function Skills() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8 mb-16">
        {/* most images from https://www.stickpng.com/ */}
        <div className="tooltip" data-tip="React">
          <Image
            alt="react"
            src={"/depIcons/react.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="HTML5">
          <Image
            alt="HTML5"
            src={"/depIcons/html.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="CSS3">
          <Image alt="CSS3" src={"/depIcons/css.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="graphQL">
          <Image
            alt="graphQL"
            src={"/depIcons/graphql.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="Next.js">
          <Image
            alt="Next Js"
            src={"/depIcons/nextjs.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="React Native">
          <Image
            alt="react native"
            src={"/depIcons/react-native.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="Node.js">
          <Image
            alt="nodejs"
            src={"/depIcons/nodejs.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="npm">
          <Image alt="npm" src={"/depIcons/npm.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="webpack">
          <Image
            alt="webpack"
            src={"/depIcons/webpack.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="babel">
          <Image
            alt="babel"
            src={"/depIcons/babel.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="jest">
          <Image alt="jest" src={"/depIcons/jest.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="backbone">
          <Image
            alt="backbone"
            src={"/depIcons/backbone.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="redux">
          <Image
            alt="redux"
            src={"/depIcons/redux.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="mui">
          <Image alt="mui" src={"/depIcons/mui.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="Google Maps API">
          <Image
            alt="google maps api"
            src={"/depIcons/googlemapsapi.png"}
            width={80}
            height={80}
          />
        </div>
        <div className="tooltip" data-tip="LESS preprocesor">
          <Image alt="less" src={"/depIcons/less.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="git">
          <Image alt="git" src={"/depIcons/git.png"} width={80} height={80} />
        </div>
        <div className="tooltip" data-tip="GitHub">
          <Image
            alt="github"
            src={"/depIcons/github.png"}
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
