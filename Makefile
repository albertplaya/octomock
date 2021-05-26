.PHONY: list
list:
	@echo ""
	@echo "Useful targets:"
	@echo ""
	@echo "  start            > start local server"
	@echo "  restart          > restart local server"
	@echo "  stop             > stop local server"

.PHONY: all install tests clean
all: clean install tests

.PHONY: start
start:
	docker-compose -f docker-compose.dev.yml up -d --remove-orphans

.PHONY: restart
restart:
	docker-compose -f docker-compose.dev.yml restart

.PHONY: stop
stop:
	docker-compose -f docker-compose.dev.yml stop
	docker-compose -f docker-compose.dev.yml rm -f

.PHONY: rebuild
rebuild:
	docker-compose -f docker-compose.dev.yml stop
	docker-compose -f docker-compose.dev.yml build
	docker-compose -f docker-compose.dev.yml up -d --remove-orphans
