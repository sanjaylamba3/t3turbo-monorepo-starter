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
	pnpm db:push                  # Push schema changes to database
	pnpm db:studio                # Open Drizzle Studio (database GUI)
	
# From packages/db directory
	cd packages/db
	pnpm push                     # Push schema changes
	pnpm studio                   # Open database studio

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
	pnpm add <package> --filter @acme/nextjs  # Add to specific workspace
	
# Workspace-specific commands
	pnpm -F @acme/nextjs add <package>        # Add to Next.js app
	pnpm -F @acme/expo add <package>          # Add to Expo app
	pnpm -F @acme/api add <package>           # Add to API package

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