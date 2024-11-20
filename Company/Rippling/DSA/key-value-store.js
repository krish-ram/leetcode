class KeyValueStore {
    constructor() {
        this.store = {};
        this.transactionStack = [];
    }

    get(key) {
        return this.store[key];
    }

    set(key, value) {
        this.trackChange(key);
        this.store[key] = value;
    }

    delete(key) {
        this.trackChange(key);
        delete this.store[key];
    }

    trackChange(key) {
        if (this.transactionStack.length > 0) {
            const transaction = this.transactionStack[this.transactionStack.length - 1];
            if (!(key in transaction.changes)) {
                // Keep track of original value for rollback purposes
                transaction.changes[key] = this.store[key] || null;
            }
        }
    }

    beginTransaction() {
        const transaction = { id: Date.now(), changes: {} };
        this.transactionStack.push(transaction);
        return transaction.id;
    }

    commitTransaction(transactionId) {
        const transactionIndex = this.transactionStack.findIndex(t => t.id === transactionId);
        if (transactionIndex !== -1) {
            // All changes in transaction are already applied to the store
            this.transactionStack = this.transactionStack.slice(0, transactionIndex);
        } else {
            throw new Error(`Transaction with ID ${transactionId} not found`);
        }
    }

    rollbackTransaction(transactionId) {
        const transactionIndex = this.transactionStack.findIndex(t => t.id === transactionId);
        if (transactionIndex !== -1) {
            // Rollback changes
            const transaction = this.transactionStack[transactionIndex];
            for (let key in transaction.changes) {
                if (transaction.changes[key] === null) {
                    delete this.store[key];
                } else {
                    this.store[key] = transaction.changes[key];
                }
            }
            this.transactionStack = this.transactionStack.slice(0, transactionIndex);
        } else {
            throw new Error(`Transaction with ID ${transactionId} not found`);
        }
    }
}