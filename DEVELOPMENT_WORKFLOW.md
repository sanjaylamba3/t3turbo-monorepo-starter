# Clone and setup the project

git clone <your-repo-url>
cd create-t3-turbo
pnpm install # Install all dependencies across workspaces

# Environment setup

cp .env.example .env # Copy environment template

# Edit .env with your database URLs, auth secrets, etc.

# Database setup

pnpm db:push # Push schema to database (first time setup)

🔄 Daily Development Commands

Start Development Servers

# Start all development servers (Next.js + Expo)

    pnpm dev                       # Runs both web and mobile in watch mode

# Start individual servers

    pnpm dev:next                  # Only Next.js development server
    cd apps/expo && pnpm dev      # Only Expo development server

# Expo specific development

    cd apps/expo
    pnpm dev:android              # Start with Android emulator
    pnpm dev:ios                  # Start with iOS simulator (macOS only)

    Building & Running Apps

# Next.js (Web)

    pnpm build                    # Build all packages and apps
    cd apps/nextjs
    pnpm build                    # Build only Next.js app
    pnpm start                    # Start production build locally

# Expo (Mobile) - Development Builds

    cd apps/expo
	
# Create development build (first time or after native changes)
	npx expo run:android          # Build and run on Android device/emulator
	npx expo run:ios              # Build and run on iOS device/simulator
	
# Quick development (after initial build)
	pnpm dev                      # Start Metro bundler
# Then press 'a' for Android or 'i' for iOS
	
# Alternative commands
	pnpm android                  # Same as expo run:android
	pnpm ios                      # Same as expo run:ios

🗄️ Database Commands

# Database development
	
    pnpm db:push                  # Push schema to Neon database  
    pnpm db:studio                # Open Drizzle Studio
    pnpm db:generate              # Generate migration files
    pnpm db:migrate               # Apply migrations
	
# From packages/db directory
	cd packages/db
	pnpm push                     # Push schema changes
	pnpm studio                   # Open database studio
    pnpm generate                 # Generate migration files
    pnpm migrate                  # Apply migrations

🔐 Authentication Commands

# Generate auth schema for database
	pnpm auth:generate            # Generate Better-Auth database schema
	
# From packages/auth directory
	cd packages/auth
	pnpm generate                 # Generate auth schema

🎨 UI & Styling Commands

# Add new shadcn/ui components
	pnpm ui-add                   # Interactive component selector
	
# From packages/ui directory
	cd packages/ui
	pnpm ui-add                   # Add components to UI package

🧹 Code Quality & Maintenance

# Formatting
	pnpm format                   # Check code formatting
	pnpm format:fix               # Fix formatting issues
	
# Linting
	pnpm lint                     # Check for linting errors
	pnpm lint:fix                 # Fix linting errors
	pnpm lint:ws                  # Check workspace dependencies
	
# Type checking
	pnpm typecheck                # Run TypeScript checks across all packages
	
# Clean up
	pnpm clean                    # Clean root node_modules
	pnpm clean:workspaces         # Clean all workspace node_modules

📦 Package Management

# Add new packages
	pnpm turbo gen init           # Generate new package interactively
	
# Install dependencies
	pnpm add <package>            # Add to root
	pnpm add <package> -w         # Add to workspace root
	pnpm add <package> --filter @repo/nextjs  # Add to specific workspace
	
# Workspace-specific commands
	pnpm -F @repo/nextjs add <package>        # Add to Next.js app
	pnpm -F @repo/expo add <package>          # Add to Expo app
	pnpm -F @repo/api add <package>           # Add to API package

🔧 Troubleshooting Commands

# Clear all caches and reinstall
	pnpm clean
	pnpm clean:workspaces
	rm -rf node_modules
	pnpm install
	
# Expo specific troubleshooting
	cd apps/expo
	npx expo install --fix       # Fix Expo dependencies
	npx expo doctor               # Check Expo setup
	rm -rf node_modules .expo     # Clear Expo cache
	pnpm install
	
# Android specific
	cd apps/expo
	npx expo run:android --clear  # Clear Android build cache
	
# Reset Metro bundler cache
	npx expo start --clear        # Clear Metro cache

📱 Android Development (Since you have Android Studio)

# Check Android setup
	npx expo doctor               # Verify Android SDK setup
	
# Android emulator management
	emulator -list-avds           # List available Android emulators
	emulator -avd <avd-name>      # Start specific emulator
	
# Build and install on connected device
	cd apps/expo
	npx expo run:android --device # Run on physical device
	adb devices                   # List connected Android devices

🚀 Production & Deployment

# Build for production
	pnpm build                    # Build all packages
	
# Next.js deployment (Vercel)
	cd apps/nextjs
	vercel                        # Deploy to Vercel
	
# Expo production builds (when ready)
	cd apps/expo
	eas build --platform android # Build for Android (requires EAS)
	eas build --platform ios     # Build for iOS (requires EAS)

📊 Monitoring & Debugging

# Check build performance
	pnpm turbo run build --summarize  # Build summary
	pnpm turbo run build --dry-run    # See what would be built
	
# Dependency analysis
	pnpm why <package>            # Why is this package installed
	pnpm list --depth=0          # List top-level dependencies

💡 Quick Tips

- First time setup: Run pnpm dev and let it install dependencies
- After pulling changes: Run pnpm install to sync dependencies
- Before committing: Run pnpm lint:fix && pnpm format:fix
- Database changes: Always run pnpm db:push after schema changes
- New components: Use pnpm ui-add instead of manual installation
- Expo development: Keep Metro bundler running, use r to reload
- Android issues: Try npx expo run:android --clear to clear cache




















# INITIAL STRUCTURE
monorepo/
├── .env.example
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   │   └── ideas.yml
│   ├── FUNDING.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── config.yml
│   ├── renovate.json
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .npmrc
├── .nvmrc
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── DEVELOPMENT_WORKFLOW.md
├── LICENSE
├── README.md
├── apps/
│   ├── expo/
│   │   ├── .expo-shared/
│   │   ├── .prettierignore
│   │   ├── app.config.ts
│   │   ├── assets/
│   │   │   ├── icon-dark.png
│   │   │   └── icon-light.png
│   │   ├── babel.config.js
│   │   ├── eas.json
│   │   ├── eslint.config.mjs
│   │   ├── index.ts
│   │   ├── metro.config.js
│   │   ├── nativewind-env.d.ts
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── _layout.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── post/
│   │   │   │       └── [id].tsx
│   │   │   ├── styles.css
│   │   │   └── utils/
│   │   │       ├── api.tsx
│   │   │       ├── auth.ts
│   │   │       ├── base-url.ts
│   │   │       └── session-store.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── turbo.json
│   └── nextjs/
│       ├── README.md
│       ├── eslint.config.js
│       ├── next.config.js
│       ├── package.json
│       ├── postcss.config.cjs
│       ├── public/
│       │   ├── favicon.ico
│       │   └── t3-icon.svg
│       ├── src/
│       │   ├── app/
│       │   │   ├── _components/
│       │   │   │   ├── auth-showcase.tsx
│       │   │   │   └── posts.tsx
│       │   │   ├── api/
│       │   │   │   ├── auth/
│       │   │   │   │   └── [...all]/
│       │   │   │   │       └── route.ts
│       │   │   │   └── trpc/
│       │   │   │       └── [trpc]/
│       │   │   │           └── route.ts
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   └── page.tsx
│       │   ├── auth/
│       │   │   ├── client.ts
│       │   │   └── server.ts
│       │   ├── env.ts
│       │   └── trpc/
│       │       ├── query-client.ts
│       │       ├── react.tsx
│       │       └── server.tsx
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── turbo.json
├── package.json
├── packages/
│   ├── api/
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── root.ts
│   │   │   ├── router/
│   │   │   │   ├── auth.ts
│   │   │   │   └── post.ts
│   │   │   └── trpc.ts
│   │   └── tsconfig.json
│   ├── auth/
│   │   ├── env.ts
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── db/
│   │   ├── drizzle.config.ts
│   │   ├── eslint.config.js
│   │   ├── migrations/
│   │   │   ├── 0000_overjoyed_dreadnoughts.sql
│   │   │   └── meta/
│   │   │       ├── 0000_snapshot.json
│   │   │       └── _journal.json
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── auth-schema.ts
│   │   │   ├── client.ts
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   ├── test-connection.ts
│   │   └── tsconfig.json
│   ├── ui/
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── button.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── index.ts
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── theme.tsx
│   │   │   └── toast.tsx
│   │   └── tsconfig.json
│   └── validators/
│       ├── eslint.config.js
│       ├── package.json
│       ├── src/
│       │   └── index.ts
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tooling/
│   ├── eslint/
│   │   ├── package.json
│   │   ├── nest.js
│   │   ├── next.js
│   │   ├── react.js
│   │   └── turbo.js
│   ├── github/
│   │   ├── dependent-issues.yml
│   │   └── pr-labeler.yml
│   ├── prettier/
│   │   ├── package.json
│   │   └── index.js
│   ├── tailwind/
│   │   ├── package.json
│   │   ├── index.ts
│   │   └── postcss.js
│   └── typescript/
│       ├── base.json
│       ├── nest.json
│       └── react-library.json
└── turbo.json