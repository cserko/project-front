<template>
  <div>
    <div>
      <!-- Create -->
      <h1 style="padding-left: 1em">CREATE</h1>
      <div class="container">
        <div class="box">
          <h2>ADD POST</h2>
          <form @submit="postPost">
            <label for="author">Author:</label><br />
            <input
              type="text"
              v-model="content.post.author"
              id="author"
              required
              name="author"
              placeholder="Serkan Tan"
            /><br />
            <label for="date">Date:</label><br />
            <input
              type="text"
              v-model="content.post.date"
              id="date"
              required
              name="date"
            /><br />
            <label for="content">Content:</label><br />
            <textarea
              v-model="content.post.content"
              id="content"
              name="content"
              required
              style="width: 400px; height: 200px"
            ></textarea
            ><br />
            <label for="title">Title:</label><br />
            <input
              id="title"
              v-model="content.post.title"
              name="title"
              required
            />
            <br />
            <label for="pp">Cover Picture:</label><br />
            <input
              type="text"
              v-model="content.post.coverPicture"
              id="pp"
              required
              name="pp"
              placeholder="../assets/post1.png"
            /><br />
            <input type="submit" value="Create" />
          </form>
        </div>

        <div class="box">
          <h2>ADD BACKBONE</h2>
          <form @submit="postBackbone">
            <label for="pp">Name:</label><br />
            <input
              type="text"
              v-model="content.backbone.name"
              id="pp"
              required
              name="pp"
              placeholder="Serkan Tan"
            /><br />
            <label for="pp">Profile Picture:</label><br />
            <input
              type="text"
              v-model="content.backbone.profile_picture"
              id="pp"
              required
              name="pp"
              placeholder="../assets/me.png"
            /><br />
            <label for="s_about">Short About:</label><br />
            <input
              type="text"
              v-model="content.backbone.short_about"
              id="s_about"
              name="s_about"
              required
              placeholder="Computer Engineer, Ankara"
            /><br />
            <label for="about">About:</label><br />
            <textarea
              id="about"
              v-model="content.backbone.about"
              name="about"
              required
              placeholder="I am a senior undergraduate student at <b>Hacettepe University</b>. I am interested in <b>Robotics, AI, Web Technologies, and FinTech</b>"
              style="width: 400px; height: 200px"
            ></textarea
            ><br />
            <input type="submit" value="Create" />
          </form>
        </div>
        <div class="box">
          <h2>ADD TIMELINE</h2>
          <form @submit="postTimeline">
            <label for="title">Title:</label><br />
            <input
              type="text"
              v-model="content.timeline.header"
              id="title"
              name="title"
              value="BSc in Science"
            /><br />
            <label for="date">Date:</label><br />
            <input
              type="text"
              v-model="content.timeline.date"
              id="date"
              name="date"
            /><br />
            <label for="description">Description:</label><br />
            <textarea
              name="description"
              v-model="content.timeline.description"
              id="description"
              cols="30"
              rows="10"
            ></textarea
            ><br />
            <input type="submit" value="Create" />
          </form>
        </div>
        <div class="box">
          <h2>ADD CONTACT ADDRESS</h2>
          <form @submit="postContact">
            <label for="description">Description:</label><br />
            <input
              type="text"
              v-model="content.contact.description"
              id="description"
              name="description"
              placeholder="reddit"
            /><br />
            <label for="icon">Icon:</label><br />
            <input
              type="text"
              v-model="content.contact.icon"
              id="icon"
              name="icon"
              placeholder="../assets/reddit.png"
            /><br />
            <label for="address">HyperLink:</label><br />
            <input
              type="text"
              v-model="content.contact.address"
              id="address"
              name="address"
            /><br />
            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
      <h1 style="padding-left: 1em">UPDATE & DELETE</h1>

      <div class="container">
        <!-- Update & Delete -->

        <div class="box">
          <label for="selected-timeline">Select a Timeline</label><br />
          <select v-model="selected.timeline" id="selected-timeline">
            <option disabled value="">Please Select One Timeline</option>
            <option
              v-bind:value="timeline"
              v-for="timeline in contentProp.timelines"
              :key="timeline.id"
            >
              {{ timeline.header }}
            </option>
          </select>
        </div>
        <div class="box">
          <label for="selected-backbone">Select a Backbone</label><br />
          <select v-model="selected.backbone" id="selected-backbone">
            <option disabled value="">Please Select One Backbone</option>
            <option
              v-bind:value="backbone"
              v-for="backbone in contentProp.backbones"
              :key="backbone.id"
            >
              {{ backbone.name }}
            </option>
          </select>
        </div>

        <div class="box">
          <label for="selected-contact">Select a Contact</label><br />
          <select v-model="selected.contact" id="selected-contact">
            <option disabled value="">Please Select One Contact</option>
            <option
              v-bind:value="contact"
              v-for="contact in contentProp.contacts"
              :key="contact.id"
            >
              {{ contact.description }}
            </option>
          </select>
        </div>
      </div>

      <div class="container">
        <div class="box" v-if="selected.timeline != null">
          <h2>UPDATE TIMELINE</h2>
          <form @submit="updateTimeline">
            <label for="title">Title:</label><br />
            <input
              type="text"
              v-model="selected.timeline.header"
              id="title"
              name="title"
            /><br />
            <label for="date">Date:</label><br />
            <input
              type="text"
              v-model="selected.timeline.date"
              id="date"
              name="date"
            /><br />
            <label for="description">Description:</label><br />
            <textarea
              name="description"
              v-model="selected.timeline.description"
              id="description"
              cols="30"
              rows="10"
            ></textarea
            ><br />
            <input type="submit" value="Update" />
            <button v-on:click="deleteTimeline">Delete</button>
          </form>
        </div>
        <div class="box" v-if="selected.backbone != null">
          <h2>UPDATE BACKBONE</h2>
          <form @submit="updateBackbone">
            <label for="pp">Name:</label><br />
            <input
              type="text"
              v-model="selected.backbone.name"
              id="pp"
              required
              name="pp"
            /><br />
            <label for="pp">Profile Picture:</label><br />
            <input
              type="text"
              v-model="selected.backbone.profile_picture"
              id="pp"
              required
              name="pp"
              placeholder="../assets/me.png"
            /><br />
            <label for="s_about">Short About:</label><br />
            <input
              type="text"
              v-model="selected.backbone.short_about"
              id="s_about"
              name="s_about"
              required
              placeholder="Computer Engineer, Ankara"
            /><br />
            <label for="about">About:</label><br />
            <textarea
              id="about"
              v-model="selected.backbone.about"
              name="about"
              required
              placeholder="I am a senior undergraduate student at <b>Hacettepe University</b>. I am interested in <b>Robotics, AI, Web Technologies, and FinTech</b>"
              style="width: 400px; height: 200px"
            ></textarea
            ><br />
            <input type="submit" value="Update" />
            <button v-on:click="deleteBackbone">Delete</button>
          </form>
        </div>

        <div class="box" v-if="selected.contact != null">
          <h2>UPDATE CONTACT</h2>
          <form @submit="updateContact">
            <label for="description">Description:</label><br />
            <input
              type="text"
              v-model="selected.contact.description"
              id="description"
              name="description"
            /><br />
            <label for="icon">Icon:</label><br />
            <input
              type="text"
              v-model="selected.contact.icon"
              id="icon"
              name="icon"
            /><br />
            <label for="address">HyperLink:</label><br />
            <input
              type="text"
              v-model="selected.contact.address"
              id="address"
              name="address"
            /><br />
            <input type="submit" value="Update" />
            <button v-on:click="deleteContact">Delete</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const MASTER_API_URL = "http://localhost:3000/master";

export default {
  data() {
    return {
      error: null,
      content: {
        backbone: {
          name: null,
          profile_picture: null,
          short_about: null,
          about: null,
        },
        timeline: {
          header: null,
          date: null,
          description: null,
        },
        contact: {
          description: null,
          icon: null,
          address: null,
        },
        post: {
          author: null,
          date: null,
          content: null,
          title: null,
          coverPicture: null,
        },
      },
      selected: {
        backbone: null,
        timeline: null,
        contact: null,
        post: null,
      },
    };
  },
  props: ["content-prop"],
  methods: {
    isValid: function (obj) {
      for (const [key, value] of Object.entries(eval(obj))) {
        // raise error
        if (!value) {
          console.log(`Invalid or Empty Field: (${key})`);
          return false;
        }
      }
      return true;
    },
    post: function (obj, url) {
      if (!this.isValid(obj)) {
        return false;
      }
      fetch(MASTER_API_URL + url, {
        method: "POST",
        body: JSON.stringify(eval(obj)),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            const error = result.details
              .map((detail) => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = null;
            this.showMessageForm = false;
            eval(obj).push(result);
          }
        });
    },
    put: function (obj, id, url) {
      if (!this.isValid(obj)) {
        return false;
      }

      fetch(MASTER_API_URL + url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(eval(obj)),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            const error = result.details
              .map((detail) => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = null;
            this.showMessageForm = false;
          }
        });
    },
    delete: function (obj, id, url) {
      if (!this.isValid(obj)) {
        return false;
      }

      fetch(MASTER_API_URL + url + "/" + id, {
        method: "DELETE",
        body: JSON.stringify(eval(obj)),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            const error = result.details
              .map((detail) => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = null;
            this.showMessageForm = false;
          }
        });
    },

    postTimeline: function () {
      this.post("this.content.timeline", "/timeline");
    },
    postBackbone: function () {
      this.post("this.content.backbone", "/backbone");
    },
    postContact: function () {
      this.post("this.content.contact", "/contact");
    },
    postPost: function () {
      this.post("this.content.post", "/post");
    },
    updateTimeline: function () {
      this.put(
        "this.selected.timeline",
        this.selected.timeline.id,
        "/timeline"
      );
    },
    updateBackbone: function () {
      this.put(
        "this.selected.backbone",
        this.selected.backbone.id,
        "/backbone"
      );
    },
    updateContact: function () {
      this.put("this.selected.contact", this.selected.contact.id, "/contact");
    },
    deleteTimeline: function () {
      this.delete(
        "this.selected.timeline",
        this.selected.timeline.id,
        "/timeline"
      );
    },
    deleteBackbone: function () {
      this.delete(
        "this.selected.backbone",
        this.selected.backbone.id,
        "/backbone"
      );
    },
    deleteContact: function () {
      this.delete(
        "this.selected.contact",
        this.selected.contact.id,
        "/contact"
      );
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box {
  padding: 1em;
  margin: 1em;
}
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
</style>