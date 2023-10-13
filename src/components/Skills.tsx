import Image from "next/image";

export function Skills() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8 mb-16">
        {/* most images from https://www.stickpng.com/ */}
        <Image alt="react" src={"/depIcons/react.png"} width={80} height={80} />
        <Image alt="HTML5" src={"/depIcons/html.png"} width={80} height={80} />
        <Image alt="CSS3" src={"/depIcons/css.png"} width={80} height={80} />
        <Image
          alt="graphQL"
          src={"/depIcons/graphql.png"}
          width={80}
          height={80}
        />
        <Image
          alt="Next Js"
          src={"/depIcons/nextjs.png"}
          width={80}
          height={80}
        />
        <Image
          alt="react native"
          src={"/depIcons/react-native.png"}
          width={80}
          height={80}
        />
        <Image
          alt="nodejs"
          src={"/depIcons/nodejs.png"}
          width={80}
          height={80}
        />
        <Image alt="npm" src={"/depIcons/npm.png"} width={80} height={80} />
        <Image
          alt="webpack"
          src={"/depIcons/webpack.png"}
          width={80}
          height={80}
        />
        <Image alt="babel" src={"/depIcons/babel.png"} width={80} height={80} />
        <Image alt="jest" src={"/depIcons/jest.png"} width={80} height={80} />
        <Image
          alt="backbone"
          src={"/depIcons/backbone.png"}
          width={80}
          height={80}
        />
        <Image alt="redux" src={"/depIcons/redux.png"} width={80} height={80} />
        <Image alt="mui" src={"/depIcons/mui.png"} width={80} height={80} />
        <Image
          alt="google maps api"
          src={"/depIcons/googlemapsapi.png"}
          width={80}
          height={80}
        />
        <Image alt="less" src={"/depIcons/less.png"} width={80} height={80} />
        <Image alt="git" src={"/depIcons/git.png"} width={80} height={80} />
        <Image
          alt="github"
          src={"/depIcons/github.png"}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
