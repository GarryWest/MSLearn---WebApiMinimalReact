# Create web apps and services with ASP.NET Core, minimal API, and .NET

## This came from here: https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa/

## Open up /PizzaClient in an integrated server and do this to run the mock server based on db.json:

vscode ➜ /workspaces/WebApiMinimalReact/PizzaClient (main) $ npx json-server --watch --port 5100 db.json

## do this to run the client /PizzaClient :

npm run dev

## migrate/create pizzas.db, run the real server /PizzaStore:

dotnet ef database update
-- If the dotnet ef can't be found, install it with dotnet tool install -g dotnet-ef then repeat the previous command.

dotnet dev-certs https
dotnet run

## .NET is a free, cross-platform, open-source developer platform for building many different types of applications. With minimal API, you can create an API in just four lines of code, while using the latest features of .NET.

## Use repo with training module

This repository supports the [Create a full stack application by using React and minimal API for ASP.NET Core](https://learn.microsoft.com/training/modules/build-web-api-minimal-spa/) training module of the [Create web apps and services with ASP.NET Core, minimal API, and .NET](https://learn.microsoft.com/en-us/training/paths/aspnet-core-minimal-api/) path.

.NET is a free, cross-platform, open-source developer platform for building many different types of applications. With minimal API, you can create an API in just four lines of code, while using the latest features of .NET.

## Use repo with training module

This repository supports the [Create a full stack application by using React and minimal API for ASP.NET Core](https://learn.microsoft.com/training/modules/build-web-api-minimal-spa/) training module of the [Create web apps and services with ASP.NET Core, minimal API, and .NET](https://learn.microsoft.com/en-us/training/paths/aspnet-core-minimal-api/) path.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
