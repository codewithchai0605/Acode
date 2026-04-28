import { defineBundle, defineServer, installers } from "../providerUtils";
import type { LspServerBundle, LspServerManifest } from "../types";

export const webServers: LspServerManifest[] = [
	defineServer({
		id: "html",
		label: "HTML",
		languages: ["html", "vue", "svelte"],
		command: "vscode-html-language-server",
		args: ["--stdio"],
		checkCommand: "which vscode-html-language-server",
		installer: installers.npm({
			executable: "vscode-html-language-server",
			packages: ["vscode-langservers-extracted"],
		}),
		clientConfig: {
			builtinExtensions: {
				keymaps: false,
			},
		},
		enabled: true,
	}),
	defineServer({
		id: "css",
		label: "CSS",
		languages: ["css", "scss", "less"],
		command: "vscode-css-language-server",
		args: ["--stdio"],
		checkCommand: "which vscode-css-language-server",
		installer: installers.npm({
			executable: "vscode-css-language-server",
			packages: ["vscode-langservers-extracted"],
		}),
		clientConfig: {
			builtinExtensions: {
				keymaps: false,
			},
		},
		enabled: true,
	}),
	defineServer({
		id: "json",
		label: "JSON",
		languages: ["json", "jsonc"],
		command: "vscode-json-language-server",
		args: ["--stdio"],
		checkCommand: "which vscode-json-language-server",
		installer: installers.npm({
			executable: "vscode-json-language-server",
			packages: ["vscode-langservers-extracted"],
		}),
		clientConfig: {
			builtinExtensions: {
				keymaps: false,
			},
		},
		enabled: true,
	}),
	defineServer({
		id: "tailwindcss",
		label: "Tailwind CSS",
		languages: [
			"html",
			"htmlembedded",
			"javascript",
			"javascriptreact",
			"typescript",
			"typescriptreact",
			"vue",
			"svelte",
			"jsx",
			"tsx",
		],
		command: "tailwindcss-language-server",
		args: ["--stdio"],
		checkCommand: "which tailwindcss-language-server",
		installer: installers.npm({
			executable: "tailwindcss-language-server",
			packages: ["@tailwindcss/language-server"],
		}),
		clientConfig: {
			builtinExtensions: {
				keymaps: false,
			},
		},
		enabled: true,
		initializationOptions: {
			userLanguages: {
				"html-eex": "html",
				"html.handlebars": "html",
				"html.erb": "html",
				"html.razor": "html",
				"html.template": "html",
				"html.php": "html",
				"html.jsp": "html",
				"html.gsp": "html",
				"html.hbs": "html",
				"html.vb": "html",
				"html.twig": "html",
				"html.jinja": "html",
				"html.liquid": "html",
				"html.cfml": "html",
				"html.django": "html",
				"html.heex": "html",
				"html.edge": "html",
			},
		},
	}),
];

export const webBundle: LspServerBundle = defineBundle({
	id: "builtin-web",
	label: "Web",
	servers: webServers,
});
