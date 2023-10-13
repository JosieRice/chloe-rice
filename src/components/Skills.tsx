import { SkillBadge } from "./SkillBadge";

export function Skills() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8 mb-16">
        <SkillBadge src="/depIcons/react.png" title="React" />
        <SkillBadge src="/depIcons/html.png" title="HTML5" />
        <SkillBadge src="/depIcons/css.png" title="CSS3" />
        <SkillBadge src="/depIcons/graphql.png" title="graphQL" />
        <SkillBadge src="/depIcons/nextjs.png" title="Next.js" />
        <SkillBadge src="/depIcons/react-native.png" title="React Native" />
        <SkillBadge src="/depIcons/nodejs.png" title="Node.js" />
        <SkillBadge src="/depIcons/npm.png" title="npm" />
        <SkillBadge src="/depIcons/webpack.png" title="webpack" />
        <SkillBadge
          src="/depIcons/module-federation.png"
          title="Module Federation"
        />
        <SkillBadge src="/depIcons/babel.png" title="babel" />
        <SkillBadge src="/depIcons/jest.png" title="jest" />
        <SkillBadge src="/depIcons/backbone.png" title="backbone" />
        <SkillBadge src="/depIcons/redux.png" title="redux" />
        <SkillBadge src="/depIcons/mui.png" title="mui" />
        <SkillBadge src="/depIcons/googlemapsapi.png" title="Google Maps API" />
        <SkillBadge src="/depIcons/less.png" title="LESS preprocesor" />
        <SkillBadge src="/depIcons/git.png" title="git" />
        <SkillBadge src="/depIcons/github.png" title="GitHub" />
      </div>
    </div>
  );
}
