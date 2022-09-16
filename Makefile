install: #make install after problem
				npm ci
brain-games:
				node bin/brain-games.js
publish:
				npm publish --dry-run
