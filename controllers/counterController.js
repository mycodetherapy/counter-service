const fs = require("fs-extra");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/counter.json");

const loadCounters = async () => {
    try {
        return await fs.readJson(DATA_FILE);
    } catch (error) {
        return {};
    }
};

const saveCounters = async (data) => {
    await fs.writeJson(DATA_FILE, data, { spaces: 2 });
};

exports.incrementCounter = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const counters = await loadCounters();

        counters[bookId] = (counters[bookId] || 0) + 1;
        await saveCounters(counters);

        res.json({ bookId, views: counters[bookId] });
    } catch (error) {
        next(error);
    }
};

exports.getCounter = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const counters = await loadCounters();

        res.json({ bookId, views: counters[bookId] || 0 });
    } catch (error) {
        next(error);
    }
};
