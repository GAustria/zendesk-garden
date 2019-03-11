# Zendesk Garden + UXPin Merge
Integration of [Garden](https://garden.zendesk.com/react-components) with UXPin Merge Technology. Check out [Merge Wiki](https://wikiuxpin.atlassian.net/wiki/spaces/MA) for detailed documentation

![alt text](https://i.imgur.com/bLp5zRb.png "Grommet and Merge")

## About Zendesk Garden and this repository.

[Garden](https://garden.zendesk.com/react-components) is a design system built by the awesome Zendesk Team. In the words of creators:

>"Building products for better customer relationships is complicated, but crafting beautifully simple web components doesn’t have to be. Welcome to our curated collection of UI goodness, the Zendesk Garden. The Garden is where we grow user interface components for Zendesk products."
>[Zendesk Garden Team](https://garden.zendesk.com/)

This repository consists of Zendesk Garden components integrated with UXPin Merge. Due to the fact that Zendesk Garden is distributed
as a set of independent packages via NPM, this integration uses [HOC](https://reactjs.org/docs/higher-order-components.html) wrappers. 

For majority of cases of Merge integrations wrappers are not needed.

## About UXPin Merge

Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. 
The imported components are 100% identical to components used by developers during the development process. 
It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users. 

[UXPin](http://uxpin.com) is a leading code–based design platform.

## How to use Merge integration with Zendesk Garden?

Merge is currently only available for selected beta users.

1. Fork this repository and clone it to your computer.
2. Install dependencies with `npm install`
3. Log in to your UXPin beta account (approved for alpha and beta tests by UXPin Inc.)
4. Start Merge dev environment with `npm run uxpin:experiment`

If you wish to push Zendesk Garden components to your UXPin account – check guide to integration with CI servers in our [WIKI](https://wikiuxpin.atlassian.net/wiki/spaces/MA/pages/665845792/CI+Servers) 

## Examples

![alt text](https://github.com/uxpin-merge/grommet/blob/master/img/grommet_1.gif "Grommet in UXPin Merge")

![alt text](https://github.com/uxpin-merge/grommet/blob/master/img/grommet_calendar.gif "Grommet Calendar in Merge")

## Theming

Theming is supported through `UXPinWrapper.js` component located in `./src/Wrapper`. This wrapper uses `ThemeProvider` component to pass theme to all components integrated with Merge.

## Supported components

| Component     | Status|
| ------------- |:-----|
| Autocomplete | ✅ Full Support |
| Avatar | ✅ Full Support |
| Anchor | ✅ Full Support |
| Button | ✅ Full Support |
| ButtonGroup | ✅ Full Support |
| ChevronButton | ✅ Full Support |
| Checkbox | ✅ Full Support |
| Chrome | ✅ Full Support. 🐛 Doesn't render children from preset. |
| Grid | ✅ Full Support |
| Loaders: Dot | ✅ Full Support |
| Loaders: Spinner | ✅ Full Support |
| Menus | ✅ Full Support |
| Modals | 🔻 Not Supported yet. |
| Notifications | ✅ Full Support |
| Pagination | ✅ Full Support |
| Radios | ✅ Full Support |
| Ranges | ✅ Full Support |
| Select | ✅ Full Support |
| Selection | 🔻 Not Supported. Difficult to make use of it in UXPin. |
| Tables | ✅ Full Support |
| Tabs | ✅ Full Support |
| Tags | ✅ Full Support |
| Textfields | ✅ Full Support |
| Toggles | ✅ Full Support |
| Tooltips | ✅ Full Support |
| Typography | ✅ Full Support |

## Known issues

1. Garden follows composition rules that create multiple lower level components with identical names. While this is fine for other usecases it creates naming conflicts in UXPin Merge. As a solution
names of components have been modified whenever needed e.g. `RangeHint`, `RangeLabel` instead of `Hint`, `Label`.
2. Chrome component doesn't render children from the default preset. Other then that component is fully functional.
3. Some of the components require implementation with control of the state. In this repository those components are left in their original state. State management can be added to wrappers in the future.
4. `Breadcrumb` style is broken unless it's nested in `BreadcrumbView`.
5. `BreadcrumbContainer` renders with an error.

## CI Server Integration (available only for *beta users*)

The recommended approach to integrating React.js components with UXPin is via Continues Integration server (Circle CI, Travis...). 
This approach provides an opportunity to establish a real single source of truth for design and development. 

After the integration with a CI server every commit to master can (if this is how your CI is configured) automatically update library in UXPin. 

This repository consits of [an example of integration with Circle CI](https://github.com/uxpin-merge/material-ui-merge/blob/master/.circleci/config.yml). 
If you wish to reuse it follow these steps:
1. Make sure that you forked this repository.
2. Go to https://circleci.com and sign-up for an account with your Github credentials.
3. Start a new project and track your fork of this repository.
4. Go into your [UXPin](http://uxpin.com) account, enter UXPin editor (in any project).
5. While inside of UXPin editor open Design Systems Libraries panel and create a new library. Copy the library token (keep it secure it provides access to your library!)

![alt text](https://github.com/uxpin-merge/material-ui-merge/blob/master/img/merge_ci.gif "UXPin Design System Library")

If you're not seeing the screen above – contact your account manager. You're not in Merge Beta group yet.

6. Go into settings of your project in Circle CI. Enter section `Environment Variables` and click on `Add new variable`.
7. Name the new variable `UXPIN_AUTH_TOKEN` and pass your token copied from the UXPin library (#5) as its value.

That's it! The next change in the master branch of your fork will automatically trigger Circle CI and send the newest version of your components to UXPin.

Integration with CI server leads to a powerful workflow, with that however comes couple of dangers, so please be aware of them!
* ⚠️ Don't share your UXPin authorization token with anyone. It leads straight to your design system library in UXPin. Keep the token safe in the CI app!
* ⚠️ Don't keep your UXPin authorization token in any file checked into your git repository.
* ⚠️ Treat contributing to Master branch just like deploying production code. *Any* change will be automatically reflected in the UXPin library and projects. 
If you want to experiment with components – start a new branch and use Merge dev environment – experiment mode (in this repository launched via `npm start`)
