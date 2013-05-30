build: components index.js
	@component build --dev

components: test component.json
	@component install --dev

clean:
	rm -fr build components template.js

test:
	@./node_modules/.bin/mocha --reporter spec

.PHONY: clean test